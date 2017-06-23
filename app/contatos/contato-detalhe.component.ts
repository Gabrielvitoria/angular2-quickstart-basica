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

    contato: Contato;

    constructor(
        private contatoService: ContatoService,
        private route: ActivatedRoute,
        private location: Location
    ) { }


    ngOnInit(): void {
        // this.classificacoes = this.ClassificacaoService.listar();
        /* route.params.forEach: é um observable e o + params converte pararetornar um interiro */

        this.contato = new Contato(0, '', '', ''); // O elemento está inicializado e init. Preferivel deixar no init p obedecer o ciclo de vida dedo componente

        this.route.params.forEach((params: Params) => {
            let id: number = +params["id"]

            if (id) {
                this.contatoService.getPorId(id)
                    .then((contato: Contato) => {
                        this.contato = contato;
                    });
            }

        });

    }
}
