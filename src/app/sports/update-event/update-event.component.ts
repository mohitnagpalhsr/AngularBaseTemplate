import { Component } from '@angular/core';
import { Event } from 'src/Models/Event';
import { EventsService } from 'src/app/events.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-event',
  templateUrl: './update-event.component.html',
  styleUrls: ['./update-event.component.css']
})
export class UpdateEventComponent {
  // message:string;
  // e:Event;
  // id:string;
  // id2:number;
  // constructor(private eventservice:EventsService,private route:Router,private router:ActivatedRoute) 
  // {
  //    this.id=this.router.snapshot.paramMap.get('id');
     
  // }

  // ngOnInit(): void {
  //   this.eventservice.getparticipation(this.id).subscribe(
  //     data=>{
  //       this.e=data;
  //     }
  //   )
  // }

  // editparticipation(event:EventsService)
  // {
  //   this.id2=this.p.participationId;
  //   console.log(this.id2);
  //   console.log(event);
  //   this.eventservice.editparticipation(this.id2,event).subscribe(
  //     data=>{
  //       this.message="Participation Updated Successfully";
  //     }
  //   )
  // }
}
