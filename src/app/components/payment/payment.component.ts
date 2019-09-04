import { Component, OnInit, OnDestroy, ViewChild, ElementRef, ContentChild } from '@angular/core';
import { PaymentService } from 'src/app/services/payment.service';
import { Payment } from 'src/app/models/paymentDTO';



declare var $: any;

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit, OnDestroy {

  myPayment: Payment;
  callPayment: any;

  @ViewChild('expirationDate', { static: false }) expirationDate: ElementRef;

  constructor(private paymentService: PaymentService, ) {
    this.myPayment = new Payment();
  }

  ngOnInit() {
    console.log(this.expirationDate);
    $(
      function () {
        $("#expirationDate").datepicker({ dateFormat: "dd-mm-yy",
          minDate:new Date(),
        });
      }
    );

  }

  Payment() {
    this.myPayment.expirationDate = $("#expirationDate").datepicker("getDate");
    this.callPayment = this.paymentService.postPayment(this.myPayment).subscribe(
      data => {
        if (data.success) {
          console.log(data.values);
        }else{
          console.log(data.message);
        }
      }
    )
  }

  ngOnDestroy(): void {
    this.callPayment.unsubscribe();
  }
}
