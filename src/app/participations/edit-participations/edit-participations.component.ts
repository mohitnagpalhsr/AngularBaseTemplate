import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Participation } from 'src/app/Models/Participation';
import { ParticipationsService } from 'src/app/participations.service';

@Component({
  selector: 'app-edit-participations',
  templateUrl: './edit-participations.component.html',
  styleUrls: ['./edit-participations.component.css']
})
export class EditParticipationsComponent {
  message:string;
  
  p:Participation={participationId:null,playerId:null,playerName:"",eventId:null, eventName:"", sportsId:null, sportsName:"", status:"", comments:""};
  id:string;
  id2:number;
  constructor(private participationservice:ParticipationsService,private route:Router,private router:ActivatedRoute) 
  {
     this.id=this.router.snapshot.paramMap.get('id');
     
  }

  ngOnInit(): void {
    this.participationservice.getparticipation(this.id).subscribe(
      data=>{
        this.p=data;
      }
    )
  }

  Update(participation:Participation)
  {
    this.id2=this.p.participationId;
    console.log(this.id2);
    console.log(participation);
    this.participationservice.editparticipation(this.id2,participation).subscribe(
      data=>{
        this.message="Participation Updated Successfully";
      }
    )
  }
}
