
import { Module } from '@nestjs/common';
import { ClienteController } from './cliente.controller';
import { ClienteService } from './cliente.service';
import { PrismaService } from './prisma/prisma.service';

@Module({
  imports: [],
  controllers: [ClienteController],
  providers: [PrismaService, ClienteService],
})
export class ClienteModule {}
