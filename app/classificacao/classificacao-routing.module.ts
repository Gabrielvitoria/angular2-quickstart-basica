import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ClassificacaoListaComponent } from './classificacao-lista.component';

const classificacaoRoutes: Routes = [
    {
        path: 'classificacao',
        component: ClassificacaoListaComponent
    }
];

/*Decora a classe com  @NgModule*/
@NgModule({
    imports: [
        RouterModule.forChild(classificacaoRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class ClassificacaoRoutingModule { }