/*# Injectable: Emite metadados para angular2 para identificar as outras dependencias 
    do contatoService e fazer a injeção de dependencia  */

/*# Style guide angular2 pede que seja decorada a classe mesmo que não tenha outras dependencias */

import { Injectable } from '@angular/core';

import { CONTATOS } from './contatos-mock';
import { Contato } from './contato.model';

@Injectable()
export class ContatoService {
    getContatos(): Contato[] {
        return CONTATOS
    }
}