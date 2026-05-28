import { appendFileSync, existsSync, mkdirSync, writeFileSync } from "fs";
import { join } from "path";

const CSV_PATH = join(process.cwd(), "data", "subscribers.csv");
const DATA_DIR = join(process.cwd(), "data");
const CSV_HEADER = "nombre,email,fecha\n";

export function saveSubscriber(nombre: string, email: string): void {
  const fecha = new Date().toLocaleString("es-ES", { timeZone: "Europe/Madrid" });
  const line = `"${nombre.replace(/"/g, '""')}","${email.replace(/"/g, '""')}","${fecha}"\n`;

  if (!existsSync(DATA_DIR)) {
    mkdirSync(DATA_DIR, { recursive: true });
  }

  if (!existsSync(CSV_PATH)) {
    writeFileSync(CSV_PATH, CSV_HEADER + line, "utf-8");
  } else {
    appendFileSync(CSV_PATH, line, "utf-8");
  }
}

export async function postToGoogleSheet(nombre: string, email: string): Promise<boolean> {
  const webhookUrl = process.env.GOOGLE_SHEET_WEBHOOK_URL;
  if (!webhookUrl) return true;

  try {
    const res = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ nombre, email }),
    });
    return res.ok;
  } catch {
    return false;
  }
}
