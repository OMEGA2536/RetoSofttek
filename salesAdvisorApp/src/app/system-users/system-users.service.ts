import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Product } from '../models/product';
import { ResponseDTO } from '../models/responseApi';
import { Sale } from '../models/sales';

@Injectable({
  providedIn: 'root'
})
export class SystemUsersService {
  
  constructor(private httpClient: HttpClient) { }

  GetListToGrid(): Observable<ResponseDTO> {
    return this.httpClient
    .get<ResponseDTO>(`${environment.apiURL}sale/GetListToGrid/`)
    .pipe(
      map((response) => {
        return response;
      })
    );
  }
  LoadProducts() {
    return this.httpClient
    .get<ResponseDTO>(`${environment.apiURL}product/`)
    .pipe(
      map((response) => {
        return response;
      })
    );
  }
  LoadAdvisors() {
    return this.httpClient
    .get<ResponseDTO>(`${environment.apiURL}advisor/`)
    .pipe(
      map((response) => {
        return response;
      })
    );
  }

  InsertSale(sale: Sale) {
    return this.httpClient
   .post<ResponseDTO>(`${environment.apiURL}sale/`,sale)
   .pipe(
     map((response) => {
       return response;
     })
   );
  }
  InsertProduct(product: Product) {
    return this.httpClient
   .post<ResponseDTO>(`${environment.apiURL}product/`,product)
   .pipe(
     map((response) => {
       return response;
     })
   );
  } 
}

