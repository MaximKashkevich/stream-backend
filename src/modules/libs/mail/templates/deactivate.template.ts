interface DeactivateTemplateProps {
  token: string;
  metadata: {
    location: {
      country: string;
      city: string;
    };
    device: {
      os: string;
      browser: string;
    };
    ip: string;
  };
}

export function DeactivateTemplate({
  token,
  metadata,
}: DeactivateTemplateProps): string {
  const currentDate = new Date().toLocaleDateString('ru-RU', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });

  return `<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Деактивация аккаунта</title>
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
      max-width: 600px;
      margin: 0 auto;
      padding: 20px;
      background-color: #f8fafc;
      color: #1f2937;
      line-height: 1.6;
    }
    
    .container {
      background: white;
      border-radius: 12px;
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
      overflow: hidden;
    }
    
    .header {
      background: linear-gradient(135deg, #f87171 0%, #ef4444 100%);
      padding: 40px 30px;
      text-align: center;
      color: white;
    }
    
    .header h1 {
      font-size: 28px;
      font-weight: 700;
      margin-bottom: 10px;
    }
    
    .header p {
      font-size: 16px;
      opacity: 0.9;
      max-width: 80%;
      margin: 0 auto;
    }
    
    .content {
      padding: 40px 30px;
    }
    
    .section {
      margin-bottom: 30px;
    }
    
    .section-title {
      font-size: 18px;
      font-weight: 600;
      color: #ef4444;
      margin-bottom: 15px;
      display: flex;
      align-items: center;
      gap: 8px;
    }
    
    .section-title::before {
      content: '';
      display: inline-block;
      width: 4px;
      height: 20px;
      background-color: #ef4444;
      border-radius: 2px;
    }
    
    .code-block {
      background-color: #fef2f2;
      border: 2px dashed #fca5a5;
      border-radius: 12px;
      padding: 30px;
      text-align: center;
      margin: 25px 0;
    }
    
    .code {
      font-family: 'Courier New', monospace;
      font-size: 32px;
      font-weight: 700;
      letter-spacing: 5px;
      color: #dc2626;
      background: white;
      padding: 20px 30px;
      border-radius: 8px;
      display: inline-block;
      box-shadow: 0 4px 12px rgba(220, 38, 38, 0.1);
    }
    
    .code-label {
      color: #dc2626;
      font-size: 14px;
      font-weight: 600;
      margin-top: 15px;
      display: block;
    }
    
    .info-grid {
      background-color: #f8fafc;
      border-radius: 8px;
      padding: 20px;
      margin: 25px 0;
    }
    
    .info-row {
      display: flex;
      justify-content: space-between;
      padding: 10px 0;
      border-bottom: 1px solid #e2e8f0;
    }
    
    .info-row:last-child {
      border-bottom: none;
    }
    
    .info-label {
      color: #64748b;
      font-size: 14px;
      min-width: 120px;
    }
    
    .info-value {
      color: #1e293b;
      font-weight: 500;
      text-align: right;
      flex: 1;
    }
    
    .warning {
      background-color: #fef3c7;
      border-left: 4px solid #f59e0b;
      padding: 20px;
      border-radius: 8px;
      margin: 25px 0;
    }
    
    .warning-title {
      color: #92400e;
      font-weight: 600;
      margin-bottom: 8px;
      display: flex;
      align-items: center;
      gap: 8px;
    }
    
    .warning-list {
      list-style: none;
      padding-left: 0;
    }
    
    .warning-list li {
      padding: 5px 0;
      color: #92400e;
      position: relative;
      padding-left: 20px;
    }
    
    .warning-list li::before {
      content: '•';
      position: absolute;
      left: 0;
      color: #f59e0b;
      font-size: 20px;
    }
    
    .footer {
      text-align: center;
      padding: 30px;
      background-color: #f8fafc;
      border-top: 1px solid #e2e8f0;
      color: #64748b;
      font-size: 14px;
    }
    
    .link {
      color: #18b9ae;
      text-decoration: none;
      font-weight: 500;
    }
    
    .link:hover {
      text-decoration: underline;
    }
    
    .text-center {
      text-align: center;
    }
    
    .mb-20 {
      margin-bottom: 20px;
    }
    
    .mb-10 {
      margin-bottom: 10px;
    }
    
    .mt-20 {
      margin-top: 20px;
    }
    
    .text-sm {
      font-size: 14px;
    }
    
    .text-gray {
      color: #64748b;
    }
    
    .text-muted {
      color: #94a3b8;
      font-size: 12px;
    }
    
    .important-note {
      background-color: #fef2f2;
      border-radius: 8px;
      padding: 20px;
      margin: 25px 0;
      border-left: 4px solid #ef4444;
    }
    
    .important-title {
      color: #dc2626;
      font-weight: 600;
      margin-bottom: 10px;
      display: flex;
      align-items: center;
      gap: 8px;
    }
    
    @media (max-width: 480px) {
      body {
        padding: 10px;
      }
      
      .header {
        padding: 30px 20px;
      }
      
      .content {
        padding: 30px 20px;
      }
      
      .code {
        font-size: 24px;
        padding: 15px 20px;
        letter-spacing: 3px;
      }
      
      .info-row {
        flex-direction: column;
        gap: 5px;
      }
      
      .info-label,
      .info-value {
        text-align: left;
      }
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>Запрос на деактивацию аккаунта</h1>
      <p>Вы инициировали процесс деактивации вашего аккаунта на платформе <b>TeaStream</b></p>
    </div>
    
    <div class="content">
      <div class="section">
        <h2 class="section-title">Код подтверждения</h2>
        <p class="mb-20">Для завершения процесса деактивации аккаунта введите следующий код подтверждения:</p>
        
        <div class="code-block">
          <div class="code">${token}</div>
          <span class="code-label">Код действителен в течение 5 минут</span>
        </div>
        
        <p class="text-center text-gray">Никому не сообщайте этот код</p>
      </div>
      
      <div class="section">
        <h2 class="section-title">Информация о запросе</h2>
        <p class="text-gray mb-10">Запрос выполнен: ${currentDate}</p>
        
        <div class="info-grid">
          <div class="info-row">
            <span class="info-label">📍 Расположение:</span>
            <span class="info-value">${metadata.location.city}, ${metadata.location.country}</span>
          </div>
          <div class="info-row">
            <span class="info-label">💻 Устройство:</span>
            <span class="info-value">${metadata.device.os}</span>
          </div>
          <div class="info-row">
            <span class="info-label">🌐 Браузер:</span>
            <span class="info-value">${metadata.device.browser}</span>
          </div>
          <div class="info-row">
            <span class="info-label">🔒 IP-адрес:</span>
            <span class="info-value">${metadata.ip}</span>
          </div>
        </div>
      </div>
      
      <div class="important-note">
        <h3 class="important-title">⚠️ Важная информация</h3>
        <ul class="warning-list">
          <li>После деактивации восстановить аккаунт будет невозможно</li>
          <li>Все ваши данные, включая историю и настройки, будут удалены</li>
          <li>Если вы не запрашивали деактивацию, немедленно проигнорируйте это письмо</li>
          <li>Убедитесь, что вы сделали резервные копии важных данных</li>
        </ul>
      </div>
      
      <div class="warning">
        <h3 class="warning-title">🚨 Обратите внимание</h3>
        <p>Если вы не инициировали этот запрос, возможно, кто-то пытается получить доступ к вашему аккаунту. Рекомендуем:</p>
        <ul class="warning-list mt-10">
          <li>Сменить пароль вашей учетной записи</li>
          <li>Проверить активность в разделе безопасности</li>
          <li>Включить двухфакторную аутентификацию</li>
          <li>Связаться с поддержкой для проверки подозрительной активности</li>
        </ul>
      </div>
    </div>
    
    <div class="footer">
      <p class="mb-10">Если у вас возникли вопросы или проблемы, обратитесь в нашу службу поддержки:</p>
      <p>
        <a href="mailto:help@teastream.ru" class="link">help@stream.ru</a>
      </p>
      <p class="text-muted mt-20">
        © ${new Date().getFullYear()} stream. Все права защищены.<br>
        Это письмо отправлено автоматически, пожалуйста, не отвечайте на него.
      </p>
    </div>
  </div>
</body>
</html>`;
}
