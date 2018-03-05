import { Component, OnInit } from '@angular/core';
import { ColaboradorService } from '../colaborador.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Http } from '@angular/http';
import {environment} from '../../../environments/environment'

@Component({
  selector: 'app-colaborador-edit',
  templateUrl: './colaborador-edit.component.html',
  styleUrls: ['./colaborador-edit.component.css']
})
export class ColaboradorEditComponent implements OnInit {
  formulario: FormGroup;
  colaborador;
  constructor(
    private ColabServe: ColaboradorService,
    private fb: FormBuilder,
    private router: Router,
    private http: Http
  ) {
    this.colaborador = this.ColabServe.ReturnColab();

    if(this.colaborador){
    
      this.formulario = fb.group({
        'Nome': [this.colaborador.Nome],
        'Email': [this.colaborador.Email, Validators.required],
        'Telefone': [this.colaborador.Telefone],
        'Birth': [this.colaborador.Birth],
        'cargaHoraria': [this.colaborador.CargaHoraria],
        'Escolaridade': [this.colaborador.Escolaridade]
      });
    }else if (!this.colaborador) {
      this.router.navigate(['/colaborador/cadastrar']);
      this.formulario = fb.group({
        'Nome': [''],
        'Email': [''],
        'Telefone': [''],
        'Birth': [''],
        'cargaHoraria': [''],
        'Escolaridade': ['']
      });
    }
  }
  
  ngOnInit() {
   //console.log(this.colaborador);
  }

  alteraColab(){
    this.colaborador.Nome = this.formulario.value.Nome;
    this.colaborador.Email = this.formulario.value.Email;
    this.colaborador.Telefone = this.formulario.value.Telefone;
    this.colaborador.Birth = this.formulario.value.Birth;
    this.colaborador.CargaHoraria = this.formulario.value.cargaHoraria;
    this.colaborador.Escolaridade = this.formulario.value.Escolaridade;
    this.colaborador.HoraCadastro = this.colaborador.HoraCadastro;

    this.http.put(`${environment.apiUrl}users/${this.colaborador._id}`, this.colaborador).subscribe(res =>{
      console.log(res);
      alert("Colaborador " + this.colaborador.Nome + " Atualizado com sucesso!");
      this.router.navigate(['/colaborador/listar']);
    });

  }
  

}
