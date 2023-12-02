import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SupplierService {
  private apiUrl = '/api/suppliers';

  constructor(private http: HttpClient) { }

  getSuppliers(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}