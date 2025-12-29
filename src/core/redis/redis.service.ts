import { Injectable, OnModuleInit } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { createClient, RedisClientType } from 'redis';

@Injectable()
export class RedisService implements OnModuleInit {
  public client: RedisClientType;

  constructor(private readonly config: ConfigService) {
    this.client = createClient({
      url: this.config.getOrThrow('REDIS_URI'),
    });
  }

  async onModuleInit() {
    await this.client.connect();
  }

  async get(key: string): Promise<string | null> {
    return this.client.get(key);
  }

  async keys(pattern: string): Promise<string[]> {
    return this.client.keys(pattern);
  }

  async del(key: string): Promise<number> {
    return this.client.del(key);
  }
}
