import { NextResponse } from "next/server";
import { postToGoogleSheet, saveSubscriber } from "@/lib/subscribers";

export async function POST(request: Request) {
  try {
    const { nombre, email } = await request.json();

    if (!nombre || typeof nombre !== "string" || nombre.trim().length === 0) {
      return NextResponse.json({ error: "El nombre es obligatorio" }, { status: 400 });
    }

    if (!email || typeof email !== "string" || !email.includes("@")) {
      return NextResponse.json({ error: "Email inválido" }, { status: 400 });
    }

    saveSubscriber(nombre.trim(), email.trim().toLowerCase());
    await postToGoogleSheet(nombre.trim(), email.trim().toLowerCase());

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Error al guardar" }, { status: 500 });
  }
}
