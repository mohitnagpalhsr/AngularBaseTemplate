import { Component ,OnInit} from '@angular/core';
import { Event } from 'src/Models/Event';
import { EventsService } from 'src/app/events.service';

@Component({
  selector: 'app-view-event-by-name',
  templateUrl: './view-event-by-name.component.html',
  styleUrls: ['./view-event-by-name.component.css']
})
export class ViewEventByNameComponent {
  eventname="";
  message:string;
  role=localStorage.getItem("role");

  e:Event={
    eventId:null,
    eventDate:null,
    eventName:"",
    noofSlots:null,
    sportsName:""
}

  constructor(private eventservice:EventsService) {}

  ngOnInit(): void {
    
  }

  getEventByName()
  {
    this.eventservice.getEventByName(this.eventname).subscribe(
      data=>{
          this.e=data;
          console.log(this.e);
      }
    );
  }

  clickMethod(event:Event) 
  {
    if(confirm("Are you sure you want to cancel "+event.eventName + " event?")) {
      this.eventservice.deleteevent(event.eventId).subscribe()
      {
        this.message="Event Cancelled Successfully";
        
      }
    }
  }
}