import { NextResponse } from "next/server";
import { postToGoogleSheet, saveSubscriber } from "@/lib/subscribers";

const rateLimitMap = new Map<string, { count: number; reset: number }>();
const RATE_LIMIT = 5;
const RATE_WINDOW = 15 * 60 * 1000;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MAX_NAME = 100;
const MAX_EMAIL = 254;

function getClientIp(request: Request): string {
  const forwarded = request.headers.get("x-forwarded-for");
  if (forwarded) return forwarded.split(",")[0].trim();
  return "127.0.0.1";
}

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);
  if (!entry || now > entry.reset) {
    rateLimitMap.set(ip, { count: 1, reset: now + RATE_WINDOW });
    return true;
  }
  if (entry.count >= RATE_LIMIT) return false;
  entry.count++;
  return true;
}

function checkOrigin(request: Request): boolean {
  const origin = request.headers.get("origin");
  if (!origin) return true;
  const host = request.headers.get("host") || "";
  try {
    return new URL(origin).host === host;
  } catch {
    return false;
  }
}

export async function POST(request: Request) {
  if (!checkOrigin(request)) {
    return NextResponse.json({ error: "Origen no permitido" }, { status: 403 });
  }

  const ip = getClientIp(request);
  if (!checkRateLimit(ip)) {
    return NextResponse.json({ error: "Demasiadas peticiones. Inténtalo más tarde." }, { status: 429 });
  }

  try {
    const contentType = request.headers.get("content-type") || "";
    if (!contentType.includes("application/json")) {
      return NextResponse.json({ error: "Formato no válido" }, { status: 400 });
    }

    const text = await request.text();
    if (text.length > 1024) {
      return NextResponse.json({ error: "Datos demasiado largos" }, { status: 400 });
    }

    let nombre: unknown;
    let email: unknown;
    try {
      const body = JSON.parse(text);
      nombre = body.nombre;
      email = body.email;
    } catch {
      return NextResponse.json({ error: "JSON inválido" }, { status: 400 });
    }

    if (!nombre || typeof nombre !== "string") {
      return NextResponse.json({ error: "El nombre es obligatorio" }, { status: 400 });
    }
    const nombreLimpio = nombre.trim();
    if (nombreLimpio.length === 0 || nombreLimpio.length > MAX_NAME) {
      return NextResponse.json({ error: "El nombre debe tener entre 1 y 100 caracteres" }, { status: 400 });
    }

    if (!email || typeof email !== "string") {
      return NextResponse.json({ error: "El email es obligatorio" }, { status: 400 });
    }
    const emailLimpio = email.trim().toLowerCase();
    if (emailLimpio.length > MAX_EMAIL || !EMAIL_RE.test(emailLimpio)) {
      return NextResponse.json({ error: "Email inválido" }, { status: 400 });
    }

    saveSubscriber(nombreLimpio, emailLimpio);
    console.log("[API] Suscriptor guardado");

    const result = await postToGoogleSheet(nombreLimpio, emailLimpio);

    if (!result.ok) {
      console.error("[API] Fallo al insertar en Google Sheets:", result.error);
      return NextResponse.json({
        ok: false,
        error: "Error al guardar los datos. Inténtalo de nuevo más tarde.",
      }, { status: 502 });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[API] Error inesperado:", err);
    return NextResponse.json({ error: "Error interno del servidor" }, { status: 500 });
  }
}
