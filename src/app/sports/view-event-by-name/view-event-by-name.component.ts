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
}