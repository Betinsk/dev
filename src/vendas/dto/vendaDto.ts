import { item } from ".prisma/client"

export class VendaDto {

    id_venda: number
    frete: number
    total: number
    dataCadastro: Date
    id_cliente: number
    itens: item[]

    constructor(id, frete, total, dataCadastro, id_cliente, itens) {
        this.id_venda = id;
        this.frete = frete;
        this.total = total;
        this.dataCadastro = this.dataCadastro;
        this.id_cliente = id_cliente;
        this.itens = itens;
        
    }

}
