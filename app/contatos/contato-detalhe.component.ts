import { Component } from '@angular/core';

import { Classificacao } from '../classificacao/classificacao.Model';
import { ClassificacaoService } from '../classificacao/classificacao.service';

@Component({
    moduleId: module.id,
    selector: 'contato-detalhe',
    templateUrl: './contato-detalhe.component.html',
})

export class ContatoDetalheComponent {
    classificacoes : Classificacao[];

    constructor(private ClassificacaoService: ClassificacaoService) { }
    
    ngOnInit(): void {
        //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        //Add 'implements OnInit' to the class.
        this.classificacoes = this.ClassificacaoService.listar();
    }
}
