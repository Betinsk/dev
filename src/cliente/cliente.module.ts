
import { Module } from '@nestjs/common';
import { ProdutoService } from 'src/produto/produto.service';
import { VendaService } from 'src/vendas/venda.service';
import { ClienteController } from './cliente.controller';
import { ClienteService } from './cliente.service';
import { PrismaService } from '../prisma.service';

@Module({
  imports: [],
  controllers: [ClienteController],
  providers: [PrismaService, ClienteService, VendaService, ProdutoService],
})
export class ClienteModule {}
