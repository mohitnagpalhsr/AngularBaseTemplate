import { Component } from '@angular/core';
import { PlayersService } from 'src/app/players.service';
import { SportsService } from 'src/app/sports.service';
import { Sport } from 'src/Models/Sport';
import { Player } from 'src/Models/Player';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-edit-player',
  templateUrl: './edit-player.component.html',
  styleUrls: ['./edit-player.component.css']
})
export class EditPlayerComponent {

  sportsname:Sport[];
  nodata:boolean;
  sporterror:boolean;
  constructor(private playerservice:PlayersService, private sportsservice:SportsService){

  }
  p:Player={playerId:null,playerName:"",age:null,contactNumber:"",email:"",gender:"",sportsName:"",status:""};
  
  message:string;
  Gender=['male','female'];
 

  ngOnInit(): void {
  //   this.sportsservice.getplayers().subscribe({
  //     next:data=>{
  //       this.sportsname=data;
  //     },
  //     error: (err: HttpErrorResponse) => this.sporterror = true
  // })
  } 

  
}
