import { Injectable } from '@angular/core';
import { CanActivate, CanLoad, Route, UrlSegment, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DevelopGuard implements CanActivate, CanLoad {

  constructor(private afAuth: AuthService, private router: Router) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.afAuth.user$.pipe(
      map((user) => user?.developer && !!user),
      tap((loggedinDeveloper) => {
        if (!loggedinDeveloper) {
          this.router.navigateByUrl('/');
        }
      })
    );
  }

  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {
      return this.afAuth.user$.pipe(
        map((user) => user?.developer && !!user),
        tap((loggedinDeveloper) => {
          if (!loggedinDeveloper) {
            this.router.navigateByUrl('/');
          }
        })
      );
  }
}
