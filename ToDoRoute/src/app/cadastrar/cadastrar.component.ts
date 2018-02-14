import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarComponent implements OnInit {
  title = "Cadastrar nova tarefa";

  Tasks: any[] = [
    {titulo: 'eh', descricao: 'ehh'},
    {titulo: 'eh1', descricao: 'ehh1'}
  ];


  constructor() {
    
   }

  enviar(event){
    event.preventDefault();
    //this.taskService.Tasks['id'] = this.taskService.Tasks.length++;
    let titulo = (<HTMLInputElement>document.getElementById('titulo')).value; 
    let descricao = (<HTMLInputElement>document.getElementById('descricao')).value;

    let dados = {titulo: titulo, descricao: descricao}
  
    this.Tasks.push(dados);

    localStorage.setItem("Tasks", JSON.stringify(this.Tasks));

    alert("Tarefa Cadastrada, Shounen");

    (<HTMLInputElement>document.getElementById('titulo')).value = '';
    (<HTMLInputElement>document.getElementById('descricao')).value = '';
    
    //console.log(this.taskService.Tasks);

  }

  ngOnInit() {
    this.Tasks = JSON.parse(localStorage.getItem("Tasks"));
    console.log(this.Tasks);
  }

}
