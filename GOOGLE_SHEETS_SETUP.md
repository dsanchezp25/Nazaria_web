# Conectar suscriptores a Google Sheets

Sigue estos pasos para que los datos de suscripción lleguen automáticamente a tu hoja de cálculo.

---

## Paso 1 — Abre el editor de Apps Script DESDE tu hoja

1. Abre tu Google Sheet (copia el ID de la URL: `https://docs.google.com/spreadsheets/d/TU_SPREADSHEET_ID/edit`)
2. En el menú: **Extensiones > Apps Script**
3. **Borra todo** el código que aparezca y **pega esto**:

```javascript
function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);
    const SPREADSHEET_ID = "TU_SPREADSHEET_ID";
    const ss = SpreadsheetApp.openById(SPREADSHEET_ID);

    let sheet = ss.getSheetByName("Suscriptores");
    if (!sheet) {
      sheet = ss.insertSheet("Suscriptores");
      sheet.appendRow(["Nombre", "Email", "Fecha"]);
    }

    const fecha = new Date().toLocaleString("es-ES", { timeZone: "Europe/Madrid" });
    sheet.appendRow([data.nombre, data.email, fecha]);

    return ContentService
      .createTextOutput(JSON.stringify({ ok: true }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ error: err.message }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
```

4. Pulsa **Ctrl+S** para guardar. Nómbralo `NazariaWebhook`.

---

## Paso 2 — Despliega como aplicación web

1. Pulsa **Implementar > Nueva implementación**
2. En "Seleccionar tipo": elige **Aplicación web**
3. En "Ejecutar como": **Yo (tu email)**
4. En "Quién tiene acceso": **Cualquiera**
5. Pulsa **Implementar**
6. **Autoriza** los permisos cuando te los pida
7. **Copia la URL** que aparece (formato: `https://script.google.com/macros/s/...`)
8. Pégala en `.env.local`:

```
GOOGLE_SHEET_WEBHOOK_URL=https://script.google.com/macros/s/TU_URL_AQUI/exec
```

---

## Paso 3 — Prueba

1. Reinicia `pnpm dev`
2. Rellena el formulario de suscripción en la landing
3. Revisa tu Google Sheet: debería aparecer una pestaña "Suscriptores" con la fila insertada

---

## ¿Cómo funciona?

1. Un usuario rellena nombre + email en el popup de la landing
2. Nuestra API guarda una copia local en `data/subscribers.csv`
3. Nuestra API envía los datos al webhook de Apps Script
4. El script usa `SpreadsheetApp.openById()` para encontrar tu hoja (siempre funciona, incluso si el script no está vinculado)
5. Si la pestaña "Suscriptores" no existe, se crea automáticamente con las cabeceras
6. La fila se inserta al final

### Respaldo local

Aunque el webhook falle, los datos siempre se guardan en `data/subscribers.csv` como copia de seguridad.
