
import { Module } from '@nestjs/common';
import { PrismaService } from 'src/cliente/prisma/prisma.service';
import { ProdutoController } from './produto.controller';
import { ProdutoService } from './produto.service';

@Module({
  imports: [],
  controllers: [ProdutoController],
  providers: [PrismaService, ProdutoService],
})
export class ProdutoModule {}
