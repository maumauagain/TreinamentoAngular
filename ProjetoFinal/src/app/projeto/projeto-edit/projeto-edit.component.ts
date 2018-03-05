import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { ProjetoService } from '../projeto.service';
import { Projeto } from '../projeto';
import { Router } from '@angular/router';
import 'moment/locale/pt-br';
import { Colaborador } from '../../colaborador/colaborador';
import { Http } from '@angular/http';
import {environment} from '../../../environments/environment'

@Component({
  selector: 'app-projeto-edit',
  templateUrl: './projeto-edit.component.html',
  styleUrls: ['./projeto-edit.component.css']
})
export class ProjetoEditComponent implements OnInit {

  formulario: FormGroup;
  projetos: Projeto[];
  projeto;
  colaboradores: Colaborador[];


  constructor(
    private fb:FormBuilder,
    private ProjServe: ProjetoService,
    private router: Router,
    private http: Http
  ) { 
    this.projeto = this.ProjServe.EnviaProj();

    if(this.projeto){
      console.log(this.projeto);
      this.formulario = fb.group({
        'Nome': [this.projeto.Nome, Validators.required],
        'Start': [this.projeto.Start, Validators.required],
        'Finish': [this.projeto.Finish],
        'Boss': [this.projeto.Boss],
        'Description': [this.projeto.Description],
        'Equipe': this.fb.array([
          this.createEquipe()
        ])
      })
    } else {
      this.router.navigate(['/projeto/cadastrar']);

      this.formulario = fb.group({
        'Nome': [''],
        'Start': [''],
        'Finish': [''],
        'Boss': [''],
        'Description': [''],
        'Equipe': this.fb.array([
          this.createEquipe()
        ])
      })
    }
  }

  ngOnInit() {
    this.ProjServe.getProjects().subscribe((res ) => this.projetos = res.json(), (res => {
      console.log(res);
    }));

    this.http.get(`${environment.apiUrl}users`).subscribe((res ) => this.colaboradores = res.json(), (res => {
      console.log(res);
    }));
  }

  createEquipe(){
    return this.fb.group({
      Membro: [''],
      CargaHoraria: ['']
    });
  }

  addEquipe(){
    let Equipes = <FormArray>this.formulario.get('Equipe');
    Equipes.push(this.createEquipe());
    console.log(this.formulario.value['Equipe'][0]['Membro']);
  }

  removeEquipe(i){
    let Equipes = <FormArray>this.formulario.get('Equipe');
    Equipes.removeAt(i);
  }

  RemoveMembro(i, equip){
    return equip.splice(i, 1);
  }

  alteraProj(){
    this.projetos.sort(function (a, b) {
      if (a.Start < b.Start) {
        return 1;
      }
    });
    console.log(this.projetos);
    //console.log(this.colaboradores);
    //this.projetos = this.projetos['Start'].sort();
    //console.log(this.projetos);
    for(let i = 0; i < this.projetos.length; ++i ){
      if(this.formulario.value.Boss == this.projetos[i].Boss){
        if((this.formulario.value.Start > this.projetos[i].Start) && 
        (this.formulario.value.Finish < this.projetos[i].Finish) ||

        (this.formulario.value.Start < this.projetos[i].Start) &&
        (this.formulario.value.Finish > this.projetos[i].Finish)  ) {
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
          // this.projeto.Equipe = this.formulario.value.Equipe;
          if(!this.formulario.value['Equipe']['Membro'] == null){
            this.formulario.value.Equipe.forEach(e => {
              this.projeto.Equipe.push(e);
            });
          }
          this.projeto.HoraCadastro = this.projeto.HoraCadastro;    

          this.ProjServe.putProjects(this.projeto._id, this.projeto).subscribe(res => {
            console.log(res);
            alert("Projeto " + this.projeto.Nome + " Atualizado com vigor");
            this.router.navigate(['projeto/listar']);
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
        //this.projeto.Equipe = this.formulario.value.Equipe;
        if(this.formulario.value['Equipe']['Membro']){
          this.formulario.value.Equipe.forEach(e => {
            this.projeto.Equipe.push(e);
          });
        }
        this.projeto.HoraCadastro = this.projeto.HoraCadastro;  

        this.ProjServe.putProjects(this.projeto._id, this.projeto).subscribe(res => {
          console.log(res);
          alert("Projeto " + this.projeto.Nome + " Atualizado com vigor");
          this.router.navigate(['projeto/listar']);
        })
        return true;
      }
    }

  }

}
