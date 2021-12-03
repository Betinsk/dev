
import { Body, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { VendaDto } from './dto/vendaDto';

@Injectable()
export class VendaService {
  constructor(private prisma: PrismaService) {
  }

  async findAll(): Promise<any> {
    // Trás todos itens de venda
    const vendas = await this.prisma.venda.findMany()
    // Trás todos itens de itens
    const itens = await this.prisma.item.findMany()
    const vendasDto = []
    vendas.forEach(venda => {
      let vendaObj = new VendaDto(venda.id_venda, venda.frete, venda.total, venda.dataCadastro, venda.id_cliente, null)
      const itensObj = itens.filter(item => item.id_venda === venda.id_venda)
      vendaObj.itens = itensObj
      vendasDto.push(vendaObj)
    })

    return vendasDto;
  }

  async create(createVenda): Promise<any> {
    const venda = await this.prisma.venda.create(
      {
        data: {
          frete: createVenda.frete,
          total: createVenda.total,
          id_cliente: createVenda.id_cliente,
          dataCadastro: createVenda.dataCadastro
        }
      }
    )
      createVenda.itens.forEach(item => item.id_venda = venda.id_venda)
    const items = await this.prisma.item.createMany(
      {
        data: createVenda.itens,
        skipDuplicates: false
                  
      }
    ) 
    return new  VendaDto(venda.id_venda, venda.frete, venda.total, venda.dataCadastro, venda.id_cliente,items)
  }


}
