import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `
            <h2>Curso Angularjs 2</h2>
            
            <router-outlet></router-outlet>
    `
})
export class AppComponent { }

/*
    removido o <contatos-lista></contatos-lista>
    pois  o <router-outlet></router-outlet> é um própios componente do RouterModule

 */