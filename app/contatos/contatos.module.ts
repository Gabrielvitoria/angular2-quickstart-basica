import { NgModule} from '@angular/core';
import { ContatosListaComponet} from './contatos-lista.componet';

/*Decorator de acordo com as necessidades */
@NgModule({
    declarations:[
        ContatosListaComponet
    ],
    exports:[
        ContatosListaComponet
    ]
})


export class ContatosModule{}
