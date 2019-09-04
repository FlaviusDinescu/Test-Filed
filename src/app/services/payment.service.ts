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

  getPayment(payment: Payment): Observable<any> {
    let url = './assets/payment.json';
    //return this.httpClient.post<any>(url, JSON.stringify(payment), httpOption);  asa ar fi call de post 
    return this.httpClient.get<any>(url);
  }

}
