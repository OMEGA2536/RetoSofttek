import {
	HttpErrorResponse,
	HttpEvent,
	HttpHandler,
	HttpInterceptor,
	HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, tap, switchMap } from 'rxjs/operators';
import { empty, throwError, pipe, EMPTY } from 'rxjs';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication/authentication.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
	constructor(
		private authService: AuthenticationService,
		private router: Router
	) {}

	intercept(req: HttpRequest<any>, next: HttpHandler) {
		req = this.addAuthHeader(req);
		return next.handle(req).pipe(
			// catchError((error: HttpErrorResponse) => {
			// 	if (error.status === 401) {
			// 		// this.authService.logout().then(() => {
			// 			this.router.navigate(['/']);
			// 		// });
			// 	}
			// 	return throwError(error);
			// })
		);
	}

	addAuthHeader(request: HttpRequest<any>) {
		const token = this.authService.getToken();
		if (token) {
			return request.clone({
				setHeaders: {
					Authorization: 'Bearer ' + token,
				},
			});
		}
		return request;
	}
}
