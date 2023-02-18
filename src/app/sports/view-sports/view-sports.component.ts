import { Component,OnInit } from '@angular/core';
import { Sport } from 'src/Models/Sport';
import { SportsService } from 'src/app/sports.service';

@Component({
  selector: 'app-view-sports',
  templateUrl: './view-sports.component.html',
  styleUrls: ['./view-sports.component.css']
})
export class ViewSportsComponent implements OnInit{
  slist:Sport[];
  constructor(private sportservice:SportsService) {}
  ngOnInit(): void {
    this.sportservice.getsports().subscribe(
      data=>{
        this.slist=data;
      }
    )
  }
}
