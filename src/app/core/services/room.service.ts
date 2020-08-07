import { Room } from './../../shared/models/room';
import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';
import { Customer } from 'src/app/shared/models/customer';

@Injectable({
  providedIn: 'root'
})
export class RoomService {

  constructor(private apiService:ApiService) { }
  getAllRooms():Observable<Room[]>{
    //http://localhost:50642/api/room
    return this.apiService.getAll('room');
  }

  getRoomByCustomer(CustomerId:number):Observable<Room>{
    return this.apiService.getOne(`${'customer'}`,CustomerId);
  }
}
