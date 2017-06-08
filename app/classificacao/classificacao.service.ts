/*# Injectable: Emite metadados para angular2 para identificar as outras dependencias 
    do contatoService e fazer a injeção de dependencia  */

/*# Style guide angular2 pede que seja decorada a classe mesmo que não tenha outras dependencias */

import { Injectable } from '@angular/core';

import { CLASSIFICACAO } from './classificacao-mock';
import { Classificacao } from './classificacao.model';

@Injectable()
export class ClassificacaoService {
    listar(): Classificacao[] {
        return CLASSIFICACAO
    }
}