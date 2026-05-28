# Conectar suscriptores a Google Sheets

Sigue estos 4 pasos para que los datos de suscripción lleguen automáticamente a una hoja de cálculo de Google Drive.

---

## Paso 1 — Crea la hoja de cálculo

1. Ve a [sheets.new](https://sheets.new)
2. Renombra la hoja a `Suscriptores`
3. Pon estos encabezados en la fila 1: `Nombre | Email | Fecha`

---

## Paso 2 — Abre el editor de Apps Script

1. En el menú: **Extensiones > Apps Script**
2. Borra el código que aparece y pega el de abajo:

```javascript
function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Suscriptores");
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

3. Pulsa **Ctrl+S** para guardar. Nómbralo `NazariaWebhook`.

---

## Paso 3 — Despliega como aplicación web

1. Pulsa **Implementar > Nueva implementación**
2. En "Seleccionar tipo": elige **Aplicación web**
3. En "Ejecutar como": **Yo (tu email)**
4. En "Quién tiene acceso": **Cualquiera**
5. Pulsa **Implementar**
6. **Autoriza** los permisos cuando te los pida
7. **Copia la URL** que aparece (algo como `https://script.google.com/macros/s/...`)

---

## Paso 4 — Configura la URL en el proyecto

Crea o edita el archivo `.env.local` en la raíz del proyecto:

```
GOOGLE_SHEET_WEBHOOK_URL=https://script.google.com/macros/s/TU_ID_AQUI/exec
```

---

## ¿Cómo funciona?

1. Un usuario rellena nombre + email en el popup de la landing
2. Nuestra API guarda una copia local en `data/subscribers.csv`
3. Nuestra API envía los datos a tu Google Sheet mediante la URL del webhook
4. La fila aparece automáticamente en tu hoja de cálculo

### Respaldo local

Aunque la hoja de Google falle o la URL no esté configurada, los datos siempre se guardan en `data/subscribers.csv` como copia de seguridad.
