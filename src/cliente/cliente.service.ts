import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';


@Injectable()
export class ClienteService {
  
  constructor(private prisma: PrismaService) {
  }

  async getAll(): Promise<any>{
    return this.prisma.cliente.findMany();
     
  }
}
