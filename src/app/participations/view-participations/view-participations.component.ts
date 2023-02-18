import { Component, OnInit } from '@angular/core';
import { Participation } from 'src/app/Models/Participation';
import { ParticipationsService } from 'src/app/participations.service';

@Component({
  selector: 'app-view-participations',
  templateUrl: './view-participations.component.html',
  styleUrls: ['./view-participations.component.css']
})
export class ViewParticipationsComponent {
  plist:Participation[];
  message:string;

  constructor(private participationservice:ParticipationsService) { }


  ngOnInit(): void {
    this.participationservice.getparticipations().subscribe(
      data=>{
        this.plist=data;
        console.log(this.plist);
    });
  }
}
