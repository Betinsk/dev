import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClienteModule } from './cliente/cliente.module';
import { PrismaService } from './prisma.service';
import { ProdutoModule } from './produto/produto.module';
import { VendaModule } from './vendas/venda.module';

@Module({
  imports: [ClienteModule, ProdutoModule, VendaModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})

export class AppModule {}
