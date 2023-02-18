import { Component, OnInit } from '@angular/core';
import { Event } from 'src/Models/Event';
import { EventsService } from 'src/app/events.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css']
})
export class CreateEventComponent implements OnInit {
  e:Event={
    eventId:null,
    eventDate:new Date,
    eventName:"",
    noofSlots:null,
    sportsName:""
}
  message:string;

  constructor(private eventservice:EventsService) { }
  ngOnInit(): void {
  }
  save():void {

  }
  
  saveevent(data:any):void{
    this.eventservice.updateevent(data).subscribe(
      data=>{
        this.message="Event Added";
      }
    )
    console.log(data);
    console.log(this.e);
  }
}