import { Component, OnInit } from '@angular/core';
import { PessoaService } from '../shared/pessoa.service';
import { Pessoa } from '../shared/pessoa.model';

@Component({
  selector: 'app-exibir',
  templateUrl: './exibir.component.html',
  styleUrls: ['./exibir.component.scss']
})
export class ExibirComponent implements OnInit {

  list: Pessoa[];
  constructor(private service: PessoaService) { }

  ngOnInit() {
    this.service.getPessoa().subscribe(listaPessoas => {
      this.list = listaPessoas.map(item => {
        return {
          id: item.payload.doc.id,
          ...item.payload.doc.data()
        } as Pessoa;
      })
    })
  }

}
