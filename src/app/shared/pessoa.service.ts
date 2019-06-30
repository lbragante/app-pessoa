import { Injectable } from '@angular/core';
import { Pessoa } from './pessoa.model';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class PessoaService {
  formData: Pessoa;

  constructor(private firestore: AngularFirestore) { }

  getPessoa() {
    return this.firestore.collection('pessoas').snapshotChanges();
  }
}
