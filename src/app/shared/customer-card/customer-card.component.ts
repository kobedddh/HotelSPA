import { Customer } from './../models/customer';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-customer-card',
  templateUrl: './customer-card.component.html',
  styleUrls: ['./customer-card.component.css']
})
export class CustomerCardComponent implements OnInit {
  @Input() customer:Customer;
  constructor() { }

  ngOnInit(): void {
  }

}
