import { Veiculos } from './veiculos';
import { Telefones } from './telefones';

export class Proprietarios {
    id: String;
    nome: String;
    nipCpf: String;
    email: String;
    cnh: String;
    dataCriacao: String;
    posto: String;
    setor: String;
    telefones: Telefones[]
    cartao: String;
    // veiculos: Veiculos[];
    
}
