import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Contato } from './contatos/contato.model';

export class InMemoryDataService implements InMemoryDbService {
    createDb():{} {

        let contatos: Contato[] = [
            { id: 1, nome: 'Gabriel da Vitoria', email: 'Teste@email.com', telefone: '(27)0000-0000' },
            { id: 2, nome: 'Mario da Vitoria', email: 'Teste@email.com', telefone: '(27)0000-0000' },
            { id: 3, nome: 'Gabriel da Vitoria', email: 'EDUARDO@email.com', telefone: '(27)0000-0000' },
            { id: 4, nome: 'Carlos da Vitoria', email: 'Teste@email.com', telefone: '(27)0000-0000' },
            { id: 5, nome: 'Hulk da Vitoria', email: 'Teste@email.com', telefone: '(27)0000-0000' },
      
        ];

        return {contatos};
    }
}
