import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/cliente/prisma/prisma.service";

@Injectable()
export class ProdutoService {
  
  constructor(private prisma: PrismaService) {
  }

  async getAll(): Promise<any>{
    return this.prisma.produto.findMany();
     
  }
}
