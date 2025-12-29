interface VerificationTemplateProps {
  domain: string;
  token: string;
}

export function VerificationTemplate({
  domain,
  token,
}: VerificationTemplateProps): string {
  const verificationLink = `${domain}/account/verify?token=${token}`;

  return `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Верификация аккаунта</title>
  <style>
    body { 
      font-family: Arial, sans-serif; 
      max-width: 600px; 
      margin: 0 auto; 
      padding: 20px; 
      background-color: #f8f9fa; 
    }
    .container { 
      background: white; 
      padding: 30px; 
      border-radius: 8px; 
      box-shadow: 0 2px 10px rgba(0,0,0,0.1); 
    }
    .button { 
      display: inline-block; 
      background-color: #18B9AE; 
      color: white; 
      padding: 12px 24px; 
      text-decoration: none; 
      border-radius: 25px; 
      font-weight: bold; 
      margin: 20px 0; 
    }
  </style>
</head>
<body>
  <div class="container">
    <h1 style="text-align: center; color: #333;">Подтверждение вашей почты</h1>
    <p style="text-align: center; color: #666; font-size: 16px;">
      Спасибо за регистрацию в Stream! Чтобы подтвердить свой адрес
      электронной почты, пожалуйста, перейдите по следующей ссылке:
    </p>
    <div style="text-align: center;">
      <a href="${verificationLink}" class="button">
        Подтвердить почту
      </a>
    </div>
    <p style="text-align: center; color: #666; font-size: 14px;">
      Если у вас есть вопросы или вы столкнулись с трудностями, не
      стесняйтесь обращаться в нашу службу поддержки по адресу
      <a href="mailto:help@stream.ru" style="color: #18b9ae; text-decoration: none;">
        help@stream.ru
      </a>.
    </p>
  </div>
</body>
</html>`;
}
