import { venda } from ".prisma/client";
import { Body, Controller, Get, Post } from "@nestjs/common";
import { VendaService } from "./venda.service";

@Controller('vendas')
export class VendaController {
  constructor(private VendaService: VendaService) {}

  
  @Get()
  findAll() {
    return this.VendaService.getAll();
  }

    @Post('post')
    async POST(@Body() vendas: venda): Promise<any> {
           return this.VendaService.add
    }
}