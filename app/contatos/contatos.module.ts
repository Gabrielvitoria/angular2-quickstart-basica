import { NgModule } from '@angular/core';
import { ContatosListaComponet } from './contatos-lista.componet';
import { CommonModule } from '@angular/common';

/*Decorator de acordo com as necessidades */
@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        ContatosListaComponet
    ],
    exports: [
        ContatosListaComponet
    ]
})


export class ContatosModule { }
