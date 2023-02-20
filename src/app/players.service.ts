import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Player } from 'src/Models/Player';

@Injectable({
  providedIn: 'root'
})

export class PlayersService {

  p:Player={playerId:null,playerName:"",age:null,contactNumber:"",email:"",gender:"",sportsName:""};
  plist:any;
  url:string="http://localhost:5009/api/Players";
  constructor(private httpclient:HttpClient) 
  { 

  }
  

  getplayers():Observable<Player[]>
  {
    this.plist=this.httpclient.get(this.url);
    return this.plist;
  }

  addplayer(p:Player):Observable<Player>
  {
    return this.httpclient.post<Player>(this.url,p,{
      headers:new HttpHeaders({
        'Content-Type':'application/json;charset=UTF-8',
        'Access-Control-Allow-Origin':'*',
        'Access-Control-Allow-Method':'*'
        
      })
    });
  }

  removeplayer(id:number):Observable<Player>
  {
    return this.httpclient.delete<Player>(this.url+"/"+id,{
      headers:new HttpHeaders({
        'Content-Type':'application/json;charset=UTF-8',
        'Access-Control-Allow-Origin':'*',
        'Access-Control-Allow-Method':'*'
        
      })
      
    });
    this.getplayers();
  }
}
