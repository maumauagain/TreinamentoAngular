import { Routes, RouterModule } from "@angular/router";
import { CadastrarComponent } from "./cadastrar.component";
import { ListarComponent } from "../listar/listar.component";
import { ModuleWithProviders, NgModule } from "@angular/core";
import { EditarComponent } from "../editar/editar.component";
import { LoginComponent } from "../login/login.component";
import { AuthGuardService } from "../guards/auth.guard.service";
import { EditarDeactivateGuard } from "../guards/editar-deactivate.guard";

const route: Routes = [
    {path: 'cadastrar', component: CadastrarComponent, canActivate: [AuthGuardService]},
    {path: 'listar', component: ListarComponent, canActivate: [AuthGuardService]},
    {path: 'login', component: LoginComponent},
    {path: 'editar/:id', component: EditarComponent, canActivate: [AuthGuardService], canDeactivate: [EditarDeactivateGuard]},
    {path: '', component: LoginComponent},
    {path: '**', component: LoginComponent}

    ];

    export const routing: ModuleWithProviders = RouterModule.forRoot(route);


@NgModule({
    imports: [RouterModule.forRoot(route)],
    exports: [RouterModule] 
})
export class CadastrarRoutingModule {}