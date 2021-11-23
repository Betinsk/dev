
import { Module } from '@nestjs/common';
import { PrismaService } from 'src/cliente/prisma/prisma.service';
import { VendaController } from './venda.controller';
import { VendaService } from './venda.service';

@Module({
  imports: [],
  controllers: [VendaController],
  providers: [PrismaService, VendaService],
})
export class VendaModule {}
