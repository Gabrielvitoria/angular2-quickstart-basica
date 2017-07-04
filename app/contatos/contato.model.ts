export class Contato{
/*Dessa forma não precisa realizar o mapeamento de cada prop
O TS ja faz o processo de bing.  */
    constructor(
        public id: number,
        public nome:string,
        public email:string,
        public telefone:string
    ){}
}