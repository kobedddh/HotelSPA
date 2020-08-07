import { CustomerService } from './../core/services/customer.service';
import { Customer } from './../shared/models/customer';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  customers:Customer[];
  constructor(private customerService:CustomerService) { }

  ngOnInit(): void {
    this.customerService.getAllCustomers().subscribe((c)=>{
      this.customers=c;
      console.log('show customers');
      console.log(this.customers);
    });
  }

}
