import { Component, OnInit } from '@angular/core'

import { Classificacao } from './classificacao.model'
import { ClassificacaoService } from './classificacao.service'


@Component({
    moduleId: module.id,
    selector: 'classificacao-lista',
    templateUrl: 'classificacao-lista.component.html'
})

export class ClassificacaoListaComponent {
    classificacao:Classificacao[];

    /* Construtor limpo sem lógica */
    constructor (private ClassificacaoService:ClassificacaoService){}

    ngOnInit() {
        //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        //Add 'implements OnInit' to the class.
        this.classificacao = this.ClassificacaoService.listar();
    }

 }