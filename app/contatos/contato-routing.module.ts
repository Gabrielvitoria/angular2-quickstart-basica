import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ContatosListaComponent } from './contatos-lista.componet';
import { ContatoDetalheComponent } from './contato-detalhe.component';


const contatoRoutes: Routes = [
    {
        path: 'contato',
        component: ContatosListaComponent
    },
    {
        path:'contato/save',
        component:ContatoDetalheComponent
    }
];


/*Decora a classe com  @NgModule*/
@NgModule({
    imports: [
        RouterModule.forChild(contatoRoutes)
    ]
})
export class ContatoRoutingModule { }