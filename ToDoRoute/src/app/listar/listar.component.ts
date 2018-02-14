import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {
  title = 'Ir ao Mercado';
  desc = 'Ir ao mercado comprar banana, leite, açucar, ovo, bunda';

  task;

  constructor() { 
    this.task = JSON.parse(localStorage.getItem('Tasks'));
  }

  remover_storage(elemento){
    console.log(elemento);
    this.task.splice (elemento, 1);
    localStorage.setItem("Tasks", JSON.stringify(this.task));
   
  }

  

  ngOnInit() {

    console.log(this.task);
  }

}
