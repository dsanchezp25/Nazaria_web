import { appendFileSync, existsSync, mkdirSync, writeFileSync } from "fs";
import { tmpdir } from "os";
import { join } from "path";

const DATA_DIR = join(tmpdir(), "nazaria-subscribers");
const CSV_PATH = join(DATA_DIR, "subscribers.csv");
const CSV_HEADER = "nombre,email,fecha\n";

function sanitizeCell(value: string): string {
  const escaped = value.replace(/"/g, '""');
  const first = escaped.charAt(0);
  if (first === "=" || first === "+" || first === "-" || first === "@") {
    return `"'${escaped}"`;
  }
  return `"${escaped}"`;
}

export function saveSubscriber(nombre: string, email: string): void {
  const fecha = new Date().toLocaleString("es-ES", { timeZone: "Europe/Madrid" });
  const line = `${sanitizeCell(nombre)},${sanitizeCell(email)},"${fecha}"\n`;

  if (!existsSync(DATA_DIR)) {
    mkdirSync(DATA_DIR, { recursive: true });
  }

  if (!existsSync(CSV_PATH)) {
    writeFileSync(CSV_PATH, CSV_HEADER + line, "utf-8");
  } else {
    appendFileSync(CSV_PATH, line, "utf-8");
  }
}

export async function postToGoogleSheet(nombre: string, email: string): Promise<{ ok: boolean; error?: string }> {
  const webhookUrl = process.env.GOOGLE_SHEET_WEBHOOK_URL;
  if (!webhookUrl) {
    console.warn("[GoogleSheet] GOOGLE_SHEET_WEBHOOK_URL no está definida en .env.local");
    return { ok: false, error: "Webhook no configurado" };
  }

  try {
    const res = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ nombre, email }),
    });

    if (!res.ok) {
      console.error("[GoogleSheet] Error HTTP:", res.status, res.statusText);
      return { ok: false, error: `Error HTTP ${res.status}` };
    }

    const text = await res.text();
    let data: unknown;
    try {
      data = JSON.parse(text);
    } catch {
      data = text;
    }

    if (typeof data === "object" && data !== null && "error" in data) {
      const errMsg = (data as { error: string }).error;
      console.error("[GoogleSheet] Error de Google:", errMsg);
      return { ok: false, error: errMsg };
    }

    console.log("[GoogleSheet] Fila insertada correctamente");
    return { ok: true };
  } catch (err) {
    console.error("[GoogleSheet] Error de red:", err);
    return { ok: false, error: "Error de conexión con Google Sheets" };
  }
}
