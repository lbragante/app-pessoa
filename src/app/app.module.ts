import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { FormsModule } from "@angular/forms";

import { AppComponent } from './app.component';
import { environment } from 'src/environments/environment';
import { InserirComponent } from './inserir/inserir.component';
import { ExibirComponent } from './exibir/exibir.component';
import { PessoaService } from './shared/pessoa.service';

@NgModule({
  declarations: [
    AppComponent,
    InserirComponent,
    ExibirComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    FormsModule
  ],
  providers: [PessoaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
