import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { ContatoService } from './contato.service';
import { Contato } from './contato.model';



import { Classificacao } from '../classificacao/classificacao.Model';
import { ClassificacaoService } from '../classificacao/classificacao.service';

@Component({
    moduleId: module.id,
    selector: 'contato-detalhe',
    templateUrl: './contato-detalhe.component.html',
})

export class ContatoDetalheComponent {
    //classificacoes : Classificacao[];
    //constructor(private ClassificacaoService: ClassificacaoService) { }

    constructor(
        private contatoService: ContatoService,
        private route: ActivatedRoute,
        private location: Location
    ) { }


    ngOnInit(): void {
        //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        //Add 'implements OnInit' to the class.
        // this.classificacoes = this.ClassificacaoService.listar();

        /* route.params.forEach: é um observable e o + params converte pararetornar um interiro */

        this.route.params.forEach((params: Params)=>{
            let id: number = +params["id"]
            console.log(id);
            this.contatoService.getPorId(id)
            .then((contato:Contato)=>{
                console.log(contato);
            });

        });

    }
}
