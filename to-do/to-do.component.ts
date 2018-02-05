import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.css']
})
export class ToDoComponent implements OnInit {

  tasks = new Array();

  gravar_storage(event){
    event.preventDefault();
    let task: string = (<HTMLInputElement>document.getElementById('bt1')).value;
    this.tasks.push(task);
    (<HTMLInputElement>document.getElementById('bt1')).value = '';
    
    localStorage.setItem("task", JSON.stringify(this.tasks));
    //debugger
    console.log(JSON.parse(localStorage['tasks']));
    //debugger
  }
  
  // recuperar_storage(){
  //   let task = JSON.parse(localStorage.getItem("task"));
  //   //console.log(task);
  // }

  remover_storage(elemento){
    console.log(elemento);
    this.tasks.splice (elemento, 1);
    localStorage.setItem("task", JSON.stringify(this.tasks));
   
  }

  

  constructor() {
    //this.recuperar_storage();

   }

  ngOnInit() {
      this.tasks = JSON.parse(localStorage.getItem("task"));
  }

}
