interface PasswordRecoveryTemplateProps {
  domain: string;
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

export function PasswordRecoveryTemplate({
  domain,
  token,
  metadata,
}: PasswordRecoveryTemplateProps): string {
  const resetLink = `${domain}/account/recovery/${token}`;
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
  <title>Сброс пароля</title>
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
      background: linear-gradient(135deg, #18b9ae 0%, #0fa29b 100%);
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
      color: #18b9ae;
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
      background-color: #18b9ae;
      border-radius: 2px;
    }
    
    .button {
      display: inline-block;
      background-color: #18b9ae;
      color: white;
      padding: 16px 40px;
      text-decoration: none;
      border-radius: 50px;
      font-weight: 600;
      font-size: 16px;
      transition: all 0.3s ease;
      box-shadow: 0 4px 15px rgba(24, 185, 174, 0.3);
    }
    
    .button:hover {
      background-color: #0fa29b;
      transform: translateY(-2px);
      box-shadow: 0 6px 20px rgba(24, 185, 174, 0.4);
    }
    
    .button-container {
      text-align: center;
      margin: 30px 0;
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
    
    .code {
      font-family: 'Courier New', monospace;
      background-color: #f1f5f9;
      padding: 10px 15px;
      border-radius: 6px;
      word-break: break-all;
      font-size: 13px;
      color: #475569;
      margin: 15px 0;
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
      
      .button {
        padding: 14px 30px;
        width: 100%;
        max-width: 280px;
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
      <h1>Восстановление доступа</h1>
      <p>Вы запросили сброс пароля для вашей учетной записи</p>
    </div>
    
    <div class="content">
      <div class="section">
        <h2 class="section-title">Сброс пароля</h2>
        <p class="mb-20">Для создания нового пароля нажмите на кнопку ниже. Ссылка будет активна в течение 1 часа.</p>
        
        <div class="button-container">
          <a href="${resetLink}" class="button">
            Установить новый пароль
          </a>
        </div>
        
        <p class="text-center text-gray mb-10">Или скопируйте ссылку:</p>
        <div class="code">${resetLink}</div>
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
      
      <div class="warning">
        <h3 class="warning-title">⚠️ Важная информация</h3>
        <ul class="warning-list">
          <li>Если вы не запрашивали сброс пароля, немедленно проигнорируйте это письмо</li>
          <li>Никогда не передавайте ссылки для сброса пароля третьим лицам</li>
          <li>Рекомендуем использовать надежный пароль и менять его регулярно</li>
        </ul>
      </div>
    </div>
    
    <div class="footer">
      <p class="mb-10">Если у вас возникли вопросы или проблемы, обратитесь в нашу службу поддержки:</p>
      <p>
        <a href="mailto:help@teastream.ru" class="link">help@teastream.ru</a>
      </p>
      <p class="text-muted mt-20">
        © ${new Date().getFullYear()} Teastream. Все права защищены.<br>
        Это письмо отправлено автоматически, пожалуйста, не отвечайте на него.
      </p>
    </div>
  </div>
</body>
</html>`;
}
