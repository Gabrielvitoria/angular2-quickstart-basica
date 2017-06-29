/*# Injectable: Emite metadados para angular2 para identificar as outras dependencias 
    do contatoService e fazer a injeção de dependencia  */

/*# Style guide angular2 pede que seja decorada a classe mesmo que não tenha outras dependencias */

import { Injectable } from '@angular/core';

import { CONTATOS } from './contatos-mock';
import { Contato } from './contato.model';

import "rxjs/add/operator/toPromise";

import {Http} from '@angular/http';

@Injectable()
export class ContatoService {

    private contatosUrl:string = 'app/contatos';

    constructor(
        private http:Http
        
    ){}


    getContatos():Promise<Contato[]> {
        return this.http.get(this.contatosUrl)
            .toPromise()
            .then(response => response.json().data as Contato[]);

        //return Promise.resolve(CONTATOS);
    }

/*Como exemplo:  Na real utilziaria uma api que retorna por id app/conato/id */
    getPorId(id: number):Promise<Contato>{
        return this.getContatos()
        .then((contatos: Contato[]) => contatos.find(contato => contato.id === id) );
    }

}