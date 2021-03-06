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
    private isNew: boolean = true;

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
                this.isNew = false;
                this.contatoService.getPorId(id)
                    .then((contato: Contato) => {
                        this.contato = contato;
                    });
            }
        });
    }

    getFormGroupClass(isValid: boolean, isPristine: boolean): {} {
        return {
            'form-group': true,
            'has-danger': !isValid && !isPristine,
            'has-success': isValid && !isPristine
        }
    }
    getFormControlClass(isValid: boolean, isPristine: boolean): {} {
        return {
            'form-control': true,
            'form-control-danger': !isValid && !isPristine,
            'form-control-success': isValid && !isPristine
        }
    }

    onSubmit(): void {
        if (this.isNew) {
            console.log('novo contato: ',  this.isNew);
        }
        else{
            console.log('editar contato: ', this.isNew);
        }

    }

}
