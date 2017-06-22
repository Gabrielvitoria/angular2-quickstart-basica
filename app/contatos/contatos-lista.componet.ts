/*# OnInit está presente no core - Lyfe cycle do angula2 */
import { Component, OnInit } from '@angular/core';

import { Contato } from './contato.model';
import { ContatoService } from './contato.service';

@Component({
    moduleId: module.id,
    selector: 'contatos-lista',
    templateUrl: 'contato-lista.compoment.html'
})

/*Dessa forma define um array de contatos para realizar uma interação no tamplate */
export class ContatosListaComponent {
    contatos: Contato[];


    /*OBS: Não chamar e executar logica no construtor como boa pratica. Apenas chamada simples.  */
    constructor(private ContatoService: ContatoService) { }

    /*# Implementando ciclo de vida no OnInit sem retorno*/
    ngOnInit():void {
        //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        //Add 'implements OnInit' to the class.
        this.ContatoService.getContatos()
        .then((contatos:Contato[])=>{
            this.contatos = contatos;
        }).catch(err=>{
            console.log(err);
        })
    }
}
