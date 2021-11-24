import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { VendaService } from './venda.service';
import { venda } from '.prisma/client';
import { VendaDto } from './dto/vendaDto';


@Controller('vendas')
export class VendaController {
  constructor(private vendaService: VendaService) {}


  @Get()
  findAll(): Promise <any[]>{
    return this.vendaService.findAll();
  }

  @Post()
  create(@Body() venda): Promise <venda> {
    return this.vendaService.create(venda);
  }

}
