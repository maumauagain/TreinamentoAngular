import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Colaborador } from '../colaborador';
import { ColaboradorService } from '../colaborador.service';
import { environment } from '../../../environments/environment'
import * as moment from 'moment';

@Component({
  selector: 'app-colaborador-list',
  templateUrl: './colaborador-list.component.html',
  styleUrls: ['./colaborador-list.component.css']
})
export class ColaboradorListComponent implements OnInit {
  
  colaboradores: Colaborador[];
  Hora: any;
  Data: any;
  panelOpenState: boolean = true;

  constructor(
    private http: Http,
    private ColabServ: ColaboradorService
  ) { }

  ngOnInit() {
    this.ColabServ.getColaborators().subscribe((res ) => this.colaboradores = res.json()
    ,(res => { console.log(res);
    }));
  }

  del(id){
    let resp = confirm("Tem certeza?");
    console.log(id);
    if(resp){
      this.ColabServ.delColaborators(id).subscribe( users => {
        console.log(users);
      })
      window.location.href=window.location.href;
    }
  }

  alteraColab(colab){
    this.ColabServ.alteraColab(colab);
  }

  horaCadastro(colaborator){
    let x = moment(colaborator).fromNow();
    this.Hora = x;
    return this.Hora;
  }

   data(data){
    let y = moment(data).calendar();
    this.Data = y;
    return this.Data;
  }

}


