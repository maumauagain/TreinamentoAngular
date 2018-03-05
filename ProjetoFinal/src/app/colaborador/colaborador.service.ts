import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Colaborador } from './colaborador';
import { environment } from '../../environments/environment';

@Injectable()

export class ColaboradorService {

    colaboradores: Colaborador[];
    colaborador;

    constructor(private http: Http){ }

    getColaborators(){
        return this.http.get(`${environment.apiUrl}users?page=1&limit=50`);
    }

    postColaborators(colaborator){
        return this.http.post(`${environment.apiUrl}users`, colaborator);
    }

    delColaborators(id){
        return this.http.delete(`${environment.apiUrl}users/${id}`);
    }

    putColaborators(id, colaborator){
        return this.http.put(`${environment.apiUrl}users/${id}`, colaborator);
    }

    alteraColab(colab){
        console.log(colab);
        this.colaborador = colab;
        return this.colaborador;
    }

    ReturnColab(){
        return this.colaborador;
    }

 }