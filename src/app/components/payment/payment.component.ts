import { Component, OnInit, OnDestroy, ViewChild, ElementRef } from '@angular/core';
import { PaymentService } from 'src/app/services/payment.service';
import { Payment } from 'src/app/models/paymentDTO';
import { Observable } from 'rxjs';
import { O_NOFOLLOW } from 'constants';

declare var $: any;

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit, OnDestroy {

  myPayment: Payment;
  callPayment: any;

  @ViewChild('dateTime', { static: true }) datetime: ElementRef;

  constructor(private paymentService: PaymentService, ) {
    this.myPayment = new Payment();
  }

  ngOnInit() {
    $(
      function () {
        $("#dateTime").datepicker({ dateFormat: "dd-mm-yy",minDate:new Date()});
      }
    );

  }

  Payment() {
    this.callPayment = this.paymentService.getPayment(this.myPayment).subscribe(
      data => {
        if (data.status === 'success') {
          console.log(data.response.message);
        }
      }
    )
  }

  ngOnDestroy(): void {
    this.callPayment.unsubscribe();
  }
}
