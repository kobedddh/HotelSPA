import { Customer } from './../../shared/models/customer';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private apiService:ApiService) { }
  getAllCustomers():Observable<Customer[]>{
    //http://localhost:50642/api/customer
    return this.apiService.getAll('customer');
  }

  getCustomersByRoom(RoomNo:number):Observable<Customer[]>{
    return this.apiService.getOne(`${'customer'}`,RoomNo);
  }
}
