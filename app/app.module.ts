// Seguindo o Style guie do Angula2 Modulos para adicionar rotas na aplicação
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.components';
import { AppRoutingModule } from './app-routing.module';
import { ContatosModule } from './contatos/contatos.module';


@NgModule({
    imports: [
        AppRoutingModule,
        BrowserModule,
        ContatosModule
    ],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})

export class AppModule { }