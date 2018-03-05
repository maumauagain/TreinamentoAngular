import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment'
import { Projeto } from './projeto';
import { Http } from '@angular/http';



@Injectable()

export class ProjetoService {
    projetos: Projeto[];
    projeto;

    constructor(private http: Http){ }

    getProjects(){
        return this.http.get(`${environment.apiUrl}projects`);
    }

    postProjects(form){
        return this.http.post(`${environment.apiUrl}projects`, form);
    }

    delProjects(id){
        return this.http.delete(`${environment.apiUrl}projects/${id}`);
    }

    putProjects(id, form){
        return this.http.put(`${environment.apiUrl}projects/${id}`, form);
    }

    AlteraProj(proj){
        this.projeto = proj;
    }

    EnviaProj(){
        return this.projeto;
    }

}
