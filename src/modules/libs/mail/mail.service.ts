import type { SessionMetadata } from '@/src/shared/types/session-metadata.types';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Resend } from 'resend';
import { PasswordRecoveryTemplate } from './templates/password-recovery.template';
import { VerificationTemplate } from './templates/verification.template';

//Исправить
const resend = new Resend('re_QZzYVRMP_FRAdSNrEvvHNpyRqmSn8D2Q1');

@Injectable()
export class MailService {
  public constructor(private readonly configService: ConfigService) {}

  private sendMail(email: string, subject: string, html: string) {
    return resend.emails.send({
      from: 'Onboarding <onboarding@resend.dev>',
      to: ['kashkevich.maxim@gmail.com'],
      subject,
      html,
    });
  }

  public async sendVerificationToken(email: string, token: string) {
    const domain = this.configService.getOrThrow<string>('ALLOWED_ORIGIN');
    const html = VerificationTemplate({ domain, token });

    return this.sendMail(email, 'Верификация аккаунта', html);
  }

  public async sendPasswordResetToken(
    email: string,
    token: string,
    metadata: SessionMetadata,
  ) {
    const domain = this.configService.getOrThrow<string>('ALLOWED_ORIGIN');
    const html = PasswordRecoveryTemplate({ domain, token, metadata });

    return this.sendMail(email, 'Сброс пароля', html);
  }
}
