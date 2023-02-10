import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { ResponseDTO } from '../models/responseApi';
import { environment } from 'src/environments/environment';
import { AuthenticationDTO } from '../models/login';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
 
  
  loggedUserSubject!: BehaviorSubject<any>;
	loggedUser: any;
  constructor(private httpClient: HttpClient) { 
    this.loggedUserSubject = new BehaviorSubject(this.loggedUser);
  }


  Loginusuario(loginReq: AuthenticationDTO): Observable<ResponseDTO> {
    return this.httpClient
    .post<ResponseDTO>(`${environment.apiURL}access/`, loginReq)
    .pipe(
      map((response) => {        
        return response;
      })
    );
  }
 

  getToken() {
		return localStorage.getItem('token') || '';
	}

  isAuthenticated() {
		if (!localStorage.getItem('token')) {
			this.loggedUserSubject.next(null);
			return this.loggedUserSubject.asObservable();
		}

		var token: string = this.getToken();
		if (token == '') this.loggedUserSubject.next(null);
		else {
			// var decoded = jwt_decode(token);
			this.loggedUser = token; //decoded;
			this.loggedUserSubject.next({ token: token });
		}

		return this.loggedUserSubject.asObservable();
	}


}
