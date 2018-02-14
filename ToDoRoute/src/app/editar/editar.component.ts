import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {

  id: any;
  newTask;
  task;
  private formMudou: boolean = false;

  constructor(private route:ActivatedRoute) { 
    this.id = this.route.snapshot.params['id'];
    this.newTask = JSON.parse(localStorage.getItem('Tasks'));
    this.task = this.newTask[this.id];
  }

  ngOnInit() {
    
  }

  editar(event, id){
    event.preventDefault();
    //console.log(id);
    this.newTask[id].titulo = (<HTMLInputElement>document.getElementById('titulo')).value;
    this.newTask[id].descricao = (<HTMLInputElement>document.getElementById('descricao')).value;
    localStorage.removeItem("Tasks");
    localStorage.setItem("Tasks", JSON.stringify(this.newTask));

    alert("Tarefa Atualizada com sucesso!");
  }

  onInput(){
    this.formMudou = true;
  }

  podeMudarRota(){
    let resp;
    if(this.formMudou){
      resp = confirm("Tem certeza que deseja sair da página?");

      if(resp == false){
        return false;
      }
    }

    return true;
  }


}
