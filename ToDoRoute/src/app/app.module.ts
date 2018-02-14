import 'materialize-css';
import { MaterializeModule } from 'angular2-materialize';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'


import { AppComponent } from './app.component';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { ListarComponent } from './listar/listar.component';
import { EditarComponent } from './editar/editar.component';
import { CadastrarRoutingModule } from './cadastrar/cadastrar.routing.module';
import { LoginComponent } from './login/login.component';
import { AuthService } from './login/auth.service';
import { AuthGuardService } from './guards/auth.guard.service';
import { EditarDeactivateGuard } from './guards/editar-deactivate.guard';


@NgModule({
  declarations: [
    AppComponent,
    CadastrarComponent,
    ListarComponent,
    EditarComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CadastrarRoutingModule,
    MaterializeModule
  ],
  providers: [
    AuthService,
    AuthGuardService,
    EditarDeactivateGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
