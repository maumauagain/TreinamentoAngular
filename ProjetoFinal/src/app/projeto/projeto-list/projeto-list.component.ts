import { Component, OnInit } from '@angular/core';
import { Projeto } from '../projeto';
import { ProjetoService } from '../projeto.service';
import * as moment from 'moment';
import 'moment/locale/pt-br';

@Component({
  selector: 'app-projeto-list',
  templateUrl: './projeto-list.component.html',
  styleUrls: ['./projeto-list.component.css']
})
export class ProjetoListComponent implements OnInit {

  projetos: Projeto[];
  Hora: any;
  Data: any;
  panelOpenState: boolean = true;

  constructor(private ProjServe: ProjetoService) { 
    
  }
  
  ngOnInit() {
    this.ProjServe.getProjects().subscribe((res ) => this.projetos = res.json(), (res => {
      console.log(res);
    }));
    
  }

  RemoveProj(id){
    let resp = confirm("Tem certeza que deseja excluir esse projeto?");
    if(resp){
      this.ProjServe.delProjects(id).subscribe(res => {
        console.log(res);
        window.location.href=window.location.href;
      })
    }
  }

  AlteraProj(proj){
    this.ProjServe.AlteraProj(proj);
  }

  hora(projeto){
    let x = moment(projeto).fromNow();
    this.Hora = x;
    return this.Hora;
  }

  data(data){
    let y = moment(data).calendar();
    this.Data = y;
    return this.Data;
  }

}
