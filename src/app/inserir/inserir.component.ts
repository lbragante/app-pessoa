import { Component, OnInit } from '@angular/core';
import { PessoaService } from '../shared/pessoa.service';
import { NgForm } from '@angular/forms';
import { format } from 'url';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-inserir',
  templateUrl: './inserir.component.html',
  styleUrls: ['./inserir.component.scss']
})
export class InserirComponent implements OnInit {

  constructor(private service: PessoaService, private firestore: AngularFirestore) { }

  ngOnInit() {
    this.resetForm();
  }

  resetForm(form?: NgForm) {
    if (form != null)
      form.resetForm();
    this.service.formData = {
      id: null,
      nome: '',
      sexo: ''
    }
  }

  onSubmit(form:NgForm) {
    let dados = form.value;
    this.firestore.collection('pessoas').add(dados);
    this.resetForm(form);
  }

}
