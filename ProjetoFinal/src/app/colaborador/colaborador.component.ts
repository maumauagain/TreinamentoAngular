import { Component, OnInit } from '@angular/core';
import { Colaborador } from './colaborador';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';
import { Http } from '@angular/http';
import { ColaboradorService } from './colaborador.service';
import 'rxjs/add/operator/map'
import { environment } from '../../environments/environment'

@Component({
  selector: 'app-colaborador',
  templateUrl: './colaborador.component.html',
  styleUrls: ['./colaborador.component.css']
})
export class ColaboradorComponent implements OnInit {

  colaborador: Colaborador = new Colaborador();
  formulario: FormGroup;
  colaboradores : Colaborador[];

  constructor(
    private fb: FormBuilder,
    private http: Http,
    private ColabServ: ColaboradorService
  ) { 
    // this.colaborador.Usuario.push([{Nome: 'Amauri', Email:'Amauri@Amauri', Telefone:'97979797', 
    // Birth:'24041998',cargaHoraria: '6', Escolaridade: 'Medio'}]);

    this.formulario = fb.group({
      'Nome': [null, Validators.required],
      'Email': [null, Validators.required],
      'Telefone': [null],
      'Birth': [null],
      'cargaHoraria': [null],
      'Escolaridade': [null],
    });

  }
  
  ngOnInit() {
    //console.log(this.arraycolab);
    //console.log(this.colaborador);
    this.ColabServ.getColaborators().subscribe((res ) => this.colaboradores = res.json()
    ,(res => { console.log(res);
    }));
    //console.log(this.ColabServ.colaboradores);
    
  }



  onSubmit(){
    console.log(this.formulario.value);
    
    for(let i = 0; i < this.colaboradores.length; i++){
      if(this.formulario.value.Email == this.colaboradores[i]['Email']){
        alert("Email ja cadastrado");
        
        return;
      }
      
    }
      this.colaborador.Nome = this.formulario.value.Nome;
      this.colaborador.Email = this.formulario.value.Email;
      this.colaborador.Telefone = this.formulario.value.Telefone;
      this.colaborador.Birth = this.formulario.value.Birth;
      this.colaborador.CargaHoraria = this.formulario.value.cargaHoraria,
      this.colaborador.Escolaridade =this.formulario.value.Escolaridade;
      this.colaborador.HoraCadastro = new Date();

      console.log(this.colaborador.HoraCadastro);

        this.ColabServ.postColaborators(this.colaborador).subscribe(res =>{
          console.log(res);
          alert("Colaborador " + this.colaborador.Nome + " Cadastrado com sucesso");
          this.formulario.reset();
        });
      
    


  }

}
