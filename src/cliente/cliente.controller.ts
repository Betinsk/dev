import { Controller, Get } from '@nestjs/common';
import { ClienteService } from './cliente.service';



@Controller('clientes')
export class ClienteController {
  constructor(private clienteService: ClienteService) {}

  
  @Get()
  findAll() {
    return this.clienteService.getAll();
  }
}
