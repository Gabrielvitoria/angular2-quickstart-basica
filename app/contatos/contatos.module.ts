import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { ContatosListaComponent } from './contatos-lista.componet';
import { ContatoDetalheComponent } from './contato-detalhe.component';
import { ContatoRoutingModule } from './contato-routing.module';


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
    ]
})


export class ContatosModule { }
