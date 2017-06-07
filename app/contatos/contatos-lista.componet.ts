import { Component} from '@angular/core';
import { CONTATOS } from './contatos-mock';
import { Contato } from './contato.model';

@Component({
    moduleId:module.id,
    selector:'contatos-lista',
    templateUrl:'contato-lista.compoment.html'
})

/*Dessa forma define um array de contatos para realizar uma interação no tamplate */
export class ContatosListaComponent{
    contatos:Contato[] = CONTATOS;
}
