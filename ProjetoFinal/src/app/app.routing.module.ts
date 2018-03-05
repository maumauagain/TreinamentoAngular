import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ColaboradorComponent } from './colaborador/colaborador.component';
import { ColaboradorListComponent } from './colaborador/colaborador-list/colaborador-list.component';
import { ColaboradorEditComponent } from './colaborador/colaborador-edit/colaborador-edit.component';
import { ProjetoComponent } from './projeto/projeto.component';
import { ProjetoListComponent } from './projeto/projeto-list/projeto-list.component';
import { ProjetoEditComponent } from './projeto/projeto-edit/projeto-edit.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
    {path: 'colaborador/cadastrar', component: ColaboradorComponent},
    {path: 'colaborador/listar', component: ColaboradorListComponent},
    {path: 'colaborador/editar', component: ColaboradorEditComponent},
    {path: 'projeto/cadastrar', component: ProjetoComponent},
    {path: 'projeto/listar', component: ProjetoListComponent},
    {path: 'projeto/editar', component: ProjetoEditComponent},
    {path: '', component: HomeComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }