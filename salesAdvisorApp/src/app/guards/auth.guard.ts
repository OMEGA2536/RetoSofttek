import { CanActivate, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthenticationService } from '../authentication/authentication.service';

@Injectable({
	providedIn: 'root',
})
export class AuthGuard implements CanActivate {
	constructor(
		private authService: AuthenticationService,
		private router: Router
	) {}

	canActivate(): Observable<boolean> {
       
		return this.authService.isAuthenticated().pipe(
			map((token) => {
				if (token) {
					console.log("token", token)
					return true;
				} else {
					
					this.router.navigate(['/']);
					return false;
				}
			})
		);
	}
}
