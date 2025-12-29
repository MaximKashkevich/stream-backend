import { PrismaService } from '@/src/prisma.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class TotpService {
  public constructor(private readonly prismaService: PrismaService) {}
}
