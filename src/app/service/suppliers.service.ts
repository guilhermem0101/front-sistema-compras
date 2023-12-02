import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SupplierService {
  private apiUrl = 'http://127.0.0.1:5000/api/suppliers/';

  constructor(private http: HttpClient) { }

  getSuppliers(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

  createSupplier(supplierData: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, supplierData);
  }
}
