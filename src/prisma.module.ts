import { Global, Module } from '@nestjs/common';

import { AccountModule } from './modules/auth/account/account.module';
import { SessionModule } from './modules/auth/session/session.module';
import { VerificationModule } from './modules/auth/verification/verification.module';
import { MailModule } from './modules/libs/mail/mail.module';
import { PrismaService } from './prisma.service';
import { PasswordRecoveryModule } from './modules/auth/password-recovery/password-recovery.module';
import { TotpModule } from './modules/auth/totp/totp/totp.module';

@Global()
@Module({
  providers: [PrismaService],
  exports: [PrismaService],
  imports: [AccountModule, SessionModule, MailModule, VerificationModule, PasswordRecoveryModule, TotpModule],
})
export class PrismaModule {}
