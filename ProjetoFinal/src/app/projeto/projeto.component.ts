import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder, FormArray } from '@angular/forms';
import { Projeto } from './projeto';
import { Colaborador } from '../colaborador/colaborador';
import { ProjetoService } from './projeto.service';
import * as moment from 'moment';
import 'moment/locale/pt-br';
import { Http } from '@angular/http';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-projeto',
  templateUrl: './projeto.component.html',
  styleUrls: ['./projeto.component.css']
})
export class ProjetoComponent implements OnInit {

  projeto: Projeto = new Projeto();
  projetos: Projeto[];
  formulario: FormGroup;
  colaboradores: Colaborador[];

  constructor(
    private fb: FormBuilder,
    private ProjServe: ProjetoService,
    private http: Http
  ) {
    this.formulario = fb.group({
      'Nome': ['', Validators.required],
      'Start': ['', Validators.required],
      'Finish': [''],
      'Boss': ['', Validators.required],
      'Description': [''],
      'Equipe': this.fb.array([
        this.createEquipe()
      ])
    })

   }

  ngOnInit() {
    this.ProjServe.getProjects().subscribe((res ) => this.projetos = res.json()
    ,(res => { console.log(res);
    }));

    this.http.get(`${environment.apiUrl}users`).subscribe((res ) => this.colaboradores = res.json(), (res => {
      console.log(res);
    }));

    
  }

  createEquipe(){
    return this.fb.group({
      Membro: ['', Validators.required],
      CargaHoraria: ['']
    });
  }

  addEquipe(){
    let Equipes = <FormArray>this.formulario.get('Equipe');
    Equipes.push(this.createEquipe());
    console.log(this.formulario.controls.Equipe['controls']);
  }

  removeEquipe(i){
    let Equipes = <FormArray>this.formulario.get('Equipe');
    Equipes.removeAt(i);
  }
  
  onSubmit(){

    this.projetos.sort(function (a, b) {
      if (a.Start < b.Start) {
        return 1;
      }
    });
    console.log(this.projetos);
    //console.log(this.colaboradores);
    //this.projetos = this.projetos['Start'].sort();
    //console.log(this.projetos);
    for(let i = 0; i < this.projetos.length; i++ ){
      if(this.formulario.value.Boss == this.projetos[i].Boss){
        if((this.formulario.value.Start > this.projetos[i].Start) && 
        (this.formulario.value.Finish < this.projetos[i].Finish) ||

        (this.formulario.value.Start < this.projetos[i].Start) &&
        (this.formulario.value.Finish > this.projetos[i].Finish) || 

        (this.formulario.value.Start < this.projetos[i].Start) && 
        (this.formulario.value.Finish > this.projetos[i].Start) || 

        (this.formulario.value.Start < this.projetos[i].Finish) &&
        (this.formulario.value.Finish > this.projetos[i].Finish) ) {
          alert("Colaborador já está trabalhando em outro Projeto");
          console.log("Not ok");
          return false;
        }else {
          console.log("ok");
          this.projeto.Nome = this.formulario.value.Nome;
          this.projeto.Start = this.formulario.value.Start;
          this.projeto.Finish = this.formulario.value.Finish;
          this.projeto.Boss = this.formulario.value.Boss;
          this.projeto.Description = this.formulario.value.Description;
          this.projeto.Equipe = this.formulario.value.Equipe;
          this.projeto.HoraCadastro = new Date();    

          this.ProjServe.postProjects(this.projeto).subscribe(res => {
            console.log(res);
            console.log(this.projeto.HoraCadastro);
            alert("Projeto Cadastrado");
            this.formulario.reset();
            //window.location.href=window.location.href;
            console.log(this.projeto.Equipe);
          })
          return true;
        }
        //return true;
      }
      //opa
      if(i == this.projetos.length -1){
        console.log("fim do loop");
        this.projeto.Nome = this.formulario.value.Nome;
        this.projeto.Start = this.formulario.value.Start;
        this.projeto.Finish = this.formulario.value.Finish;
        this.projeto.Boss = this.formulario.value.Boss;
        this.projeto.Description = this.formulario.value.Description;
        this.projeto.Equipe = this.formulario.value.Equipe;
        this.projeto.HoraCadastro = new Date();    

        this.ProjServe.postProjects(this.projeto).subscribe(res => {
          console.log(res);
          alert("Projeto Cadastrado");
          this.formulario.reset();
          // window.location.href=window.location.href;
          console.log(this.projeto.Equipe);
        })
        return true;
      }
    }

    

    console.log(this.formulario.value.Boss);

    
  }

 

}
