import { Component, OnInit } from '@angular/core';
import { Sport } from 'src/Models/Sport';
import { SportsService } from 'src/app/sports.service';

@Component({
  selector: 'app-view-sport-by-name',
  templateUrl: './view-sport-by-name.component.html',
  styleUrls: ['./view-sport-by-name.component.css']
})
export class ViewSportByNameComponent {
  sportname="";
  
  s:Sport={
    sportsId:null,
    sportsType:"",
    noOfPlayers:null,
    sportsName:""
  }
  constructor(private sportservice:SportsService) {}
  ngOnInit(): void {

  }
  getSportByName()
  {
    this.sportservice.getSportByName(this.sportname).subscribe(
      data=>{
        this.s=data;
        console.log(this.s);
      }
    )
  }
}