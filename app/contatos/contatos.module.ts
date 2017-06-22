import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContatosListaComponent } from './contatos-lista.componet';
import { ContatoDetalheComponent } from './contato-detalhe.component';
import { ContatoRoutingModule } from './contato-routing.module';
import { ContatoService } from './contato.service';
import { ClassificacaoService } from '../classificacao/classificacao.service';

/*Decorator de acordo com as necessidades */
@NgModule({
    imports: [
        CommonModule,
        ContatoRoutingModule
    ],
    declarations: [
        ContatoDetalheComponent,
        ContatosListaComponent
    ],
    exports: [
        ContatosListaComponent
    ],
    providers:[
        ContatoService, /*Service fica disponivel em todo o módulo de contato */
        ClassificacaoService

    ]
})


export class ContatosModule { }
