import { venda } from ".prisma/client";
import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/cliente/prisma/prisma.service";

@Injectable()
export class VendaService {
  
  constructor(private prisma: PrismaService) {
  }

  async getAll(): Promise<any>{
    return this.prisma.venda.findMany();
  }
  
  async add(venda: venda):Promise<any> {
    return this.prisma.venda.createMany
  }

}
