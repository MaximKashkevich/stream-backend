import { BadRequestException, Injectable } from '@nestjs/common';
import { randomBytes } from 'crypto';
import { encode } from 'hi-base32';
import { TOTP } from 'otpauth';
import * as QRCode from 'qrcode';

import { PrismaService } from '@/src/prisma.service';
import { User } from '@prisma/client';
import { EnableTotpInput } from './inputs/enable-totp.input';

@Injectable()
export class TotpService {
  public constructor(private readonly prismaService: PrismaService) {}

  public async generate(user: User) {
    const secret = encode(randomBytes(15)).replace(/=/g, '').substring(0, 24);

    await this.prismaService.user.update({
      where: { id: user.id },
      data: { totpSecret: secret },
    });

    const totp = new TOTP({
      issuer: 'TeaStream',
      label: `${user.email}`,
      algorithm: 'SHA1',
      digits: 6,
      secret,
    });

    const otpauthUrl = totp.toString();
    const qrcodeUrl = await QRCode.toDataURL(otpauthUrl);

    return { qrcodeUrl, secret };
  }

  public async enable(user: User, input: EnableTotpInput) {
    const { secret, pin } = input;

    if (user.totpSecret !== secret) {
      throw new BadRequestException('Неверный секрет');
    }

    const totp = new TOTP({
      issuer: 'TeaStream',
      label: `${user.email}`,
      algorithm: 'SHA1',
      digits: 6,
      secret,
    });

    const delta = totp.validate({
      token: pin,
      window: 10,
      timestamp: Date.now(),
    });

    if (delta === null) {
      throw new BadRequestException('Неверный код');
    }

    await this.prismaService.user.update({
      where: { id: user.id },
      data: { isTotpEnabled: true },
    });

    return true;
  }

  public async disable(user: User) {
    await this.prismaService.user.update({
      where: { id: user.id },
      data: {
        isTotpEnabled: false,
        totpSecret: null,
      },
    });

    return true;
  }
}
