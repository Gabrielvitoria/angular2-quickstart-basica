import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClassificacaoListaComponent } from './classificacao-lista.component';
import { ClassificacaoService } from './classificacao.service';
import { Classificacao } from './classificacao.Model';
import { ClassificacaoRoutingModule } from './classificacao-routing.module';

/*Decorator de acordo com as necessidades */
@NgModule({
    imports: [
        CommonModule,
        ClassificacaoRoutingModule
    ],
    declarations: [
        ClassificacaoListaComponent
    ],
    exports: [
        ClassificacaoListaComponent
    ],
    providers:[
        ClassificacaoService /*Service fica disponivel em todo o módulo de contato */

    ]
})

export class ClassificacaoModule {}
