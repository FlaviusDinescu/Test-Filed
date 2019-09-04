import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Payment } from '../models/paymentDTO';
import { Observable } from 'rxjs';

const httpOption = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  constructor(private httpClient: HttpClient) { }

  postPayment(payment: Payment): Observable<any> {
    let url = 'http://localhost:3000/test-post';
    return this.httpClient.post<any>(url, payment, httpOption);
  }

}
