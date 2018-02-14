import { Injectable } from "@angular/core";
import { EditarComponent } from "../editar/editar.component";
import { ActivatedRouteSnapshot, RouterStateSnapshot, CanDeactivate } from "@angular/router";
import { Observable } from "rxjs/Observable";


@Injectable() 
    export class EditarDeactivateGuard implements CanDeactivate<EditarComponent> {
        canDeactivate(
            component: EditarComponent,
            route: ActivatedRouteSnapshot,
            state: RouterStateSnapshot
        ): Observable<boolean> | boolean{

            return component.podeMudarRota();
        }
    }
