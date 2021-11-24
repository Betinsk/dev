
import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { VendaService } from 'src/vendas/venda.service';
import { ProdutoController } from './produto.controller';
import { ProdutoService } from './produto.service';

@Module({
  imports: [],
  controllers: [ProdutoController],
  providers: [PrismaService, ProdutoService, VendaService],
})
export class ProdutoModule {}
