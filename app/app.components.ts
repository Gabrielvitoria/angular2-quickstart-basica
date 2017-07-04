import { Component } from '@angular/core';

@Component({
    moduleId:module.id,
    selector: 'my-app',
    templateUrl: 'app.component.html'

})
export class AppComponent { }

/*
    removido o <contatos-lista></contatos-lista>
    pois  o <router-outlet></router-outlet> é um própios componente do RouterModule

 */