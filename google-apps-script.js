/**
 * Google Apps Script para recibir datos del formulario
 * 
 * INSTRUCCIONES:
 * 1. Abre Google Sheets y crea una nueva hoja llamada "landing-leads"
 * 2. Ve a Extensiones > Apps Script
 * 3. Pega este código
 * 4. Despliega como Web App (Deploy > New deployment)
 * 5. Permisos: "Anyone" puede ejecutar
 * 6. Copia la URL del deployment y úsala en GOOGLE_SHEETS_URL
 */

function doPost(e) {
  try {
    // Parsear datos
    const data = JSON.parse(e.postData.contents);
    
    // Obtener la hoja
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('landing-leads');
    
    // Si no existe la hoja, crearla con headers
    if (!sheet) {
      const newSheet = SpreadsheetApp.getActiveSpreadsheet().insertSheet('landing-leads');
      newSheet.appendRow([
        'Fecha/Hora',
        'Nombre',
        'Email',
        'Empresa',
        'Mensaje',
        'IP',
        'User Agent',
        'Navegador',
        'SO',
        'Dispositivo',
        'Idioma',
        'Timezone',
        'Referrer',
        'UTM Source',
        'UTM Medium',
        'UTM Campaign'
      ]);
      return ContentService.createTextOutput(JSON.stringify({ success: true }))
        .setMimeType(ContentService.MimeType.JSON);
    }
    
    // Agregar nueva fila con todos los datos
    sheet.appendRow([
      data.timestamp || new Date().toLocaleString('es-ES'),
      data.name || '',
      data.email || '',
      data.company || '',
      data.message || '',
      data.ip || '',
      data.userAgent || '',
      data.browser || '',
      data.os || '',
      data.device || '',
      data.language || '',
      data.timezone || '',
      data.referrer || '',
      data.utmSource || '',
      data.utmMedium || '',
      data.utmCampaign || ''
    ]);
    
    // Formatear la primera fila (headers)
    const headerRange = sheet.getRange(1, 1, 1, 16);
    headerRange.setFontWeight('bold');
    headerRange.setBackground('#4285f4');
    headerRange.setFontColor('#ffffff');
    
    // Auto-resize columnas
    sheet.autoResizeColumns(1, 16);
    
    return ContentService.createTextOutput(JSON.stringify({ 
      success: true,
      message: 'Datos guardados correctamente'
    })).setMimeType(ContentService.MimeType.JSON);
    
  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({ 
      success: false,
      error: error.toString()
    })).setMimeType(ContentService.MimeType.JSON);
  }
}

// Función de prueba
function test() {
  const testData = {
    postData: {
      contents: JSON.stringify({
        timestamp: new Date().toLocaleString('es-ES'),
        name: 'Test User',
        email: 'test@example.com',
        company: 'Test Company',
        message: 'Test message',
        ip: '192.168.1.1',
        userAgent: 'Mozilla/5.0...',
        browser: 'Chrome',
        os: 'Windows',
        device: 'Desktop',
        language: 'es-ES',
        timezone: 'Europe/Madrid',
        referrer: 'https://google.com',
        utmSource: 'google',
        utmMedium: 'cpc',
        utmCampaign: 'test'
      })
    }
  };
  
  doPost(testData);
}

