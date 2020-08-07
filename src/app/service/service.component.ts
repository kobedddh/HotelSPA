import { Service } from './../shared/models/service';
import { ActivatedRoute } from '@angular/router';
import { ServiceService } from './../core/services/service.service';
import { ApiService } from './../core/services/api.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent implements OnInit {
  services:Service[];
  @Input() roomId:number;
  constructor(private serviceService:ServiceService) { }

  ngOnInit(): void {
    // this.route.paramMap.subscribe((params)=>{
      // this.roomId= +params.get('id');
      this.serviceService.GetServicesByRoom(this.roomId).subscribe((s)=>{
        this.services=s;
        console.log(this.roomId);
        console.log(this.services);
      });
    // });
  }

}
