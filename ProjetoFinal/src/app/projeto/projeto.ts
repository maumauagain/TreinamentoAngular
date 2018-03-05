import * as moment from 'moment';
import { FormArray } from '@angular/forms/src/model';
 export class Projeto {
     public Nome: string;
     public Start: Date;
     public Finish: Date;
     public Boss: string;
     public Description: string;
     public Equipe: FormArray;
     public HoraCadastro: Date;
 }