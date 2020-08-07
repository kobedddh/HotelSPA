import { Service } from './../../shared/models/service';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private apiService:ApiService) {}

  GetServicesByRoom(RoomNo:number):Observable<Service[]>{
    // 'room/:id/services'
    return this.apiService.getAll(`${'service/'}${RoomNo}`);
  }
}
