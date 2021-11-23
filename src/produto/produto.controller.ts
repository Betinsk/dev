import { Controller, Get } from "@nestjs/common";
import { ProdutoService } from "./produto.service";


@Controller('produtos')
export class ProdutoController {
  constructor(private produtoService: ProdutoService) {}

  
  @Get()
  findAll() {
    return this.produtoService.getAll();
  }
}
