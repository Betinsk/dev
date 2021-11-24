import { Module } from '@nestjs/common';
import { VendaService } from './venda.service';
import { VendaController } from './venda.controller';
import { PrismaService } from 'src/prisma/prisma.service';
import { ClienteService } from 'src/cliente/cliente.service';

@Module({
  controllers: [VendaController],
  providers: [VendaService, PrismaService, ClienteService]
})
export class VendaModule {}
