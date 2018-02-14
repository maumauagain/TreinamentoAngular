import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AuthService } from '../login/auth.service';
@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(
    private authService: AuthService,
    private route: Router
  ) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | boolean{

    if(this.authService.usuarioEstaAutenticado()){
      return true;
    }

    this.route.navigate(['login']);
    return false;
  }

}
