import { Service } from './../shared/models/service';
import { ServiceService } from './../core/services/service.service';
import { RoomService } from './../core/services/room.service';
import { Room } from './../shared/models/room';
import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../core/services/customer.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.css']
})
export class RoomComponent implements OnInit {
  room:Room;
  customerId:number;
  services:Service[];
  roomId:number;
  constructor(private roomService:RoomService, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params)=>{
      this.customerId= +params.get('id');
      this.roomService.getRoomByCustomer(this.customerId).subscribe((r)=>{
        this.roomId=r.id;
        this.room=r;
        console.log(this.customerId);
        console.log(this.roomId);
        console.log(this.room);
      });
    });


    
  }


}
