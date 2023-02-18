import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import { Event } from 'src/Models/Event';
import {Observable, throwError} from'rxjs';

@Injectable({
  providedIn: 'root'
})

export class EventsService {
  elist:any;
  url:string="http://localhost:5087/api/Event";
  //url1="http://localhost:5155/api/Event/EventByName?name=event1";
  refreshList():Event[]
  {
    return this.elist;
  }
  addevent(e:Event):void{
    this.elist.push(e)
  }
  
  constructor(private httpclient:HttpClient) { }

  getevents():Observable<Event[]>{
    this.elist=this.httpclient.get(this.url);
    return this.elist;
  }

  getEventByName(name:string):Observable<Event>
  {
    this.elist=this.httpclient.get<Event>(this.url+"/EventByName?name="+name)
    return this.elist;
  }

  updateevent(e:Event):Observable<Event>
  {
    return this.httpclient.post<Event>(this.url,e,{
      headers:new HttpHeaders ({
        'Content-Type':'application/json;charset=UTF-8',
        'Access-Control-Allow-Origin':'*',
        'Access-Control-Allow-Method':'*'
      })
    })
  }

  deleteevent(id:Number):Observable<Event>
  {
    return this.httpclient.delete<Event>(this.url+"?id="+id,{
      headers:new HttpHeaders({
        'Content-Type':'application/json;charset=UTF-8',
        'Access-Control-Allow-Origin':'*',
        'Access-Control-Allow-Method':'*'
        
      })
      
    });
    this.getevents();
  }

  private manageError(err_response:HttpErrorResponse)
  {
    if(err_response.error instanceof ErrorEvent)
    console.error('Client Side Error:',err_response.error.message);
    else
    console.error('Server Side Error:',err_response);

    return throwError('There is a little problem while processing your request.Sorry for the inconvenience');
    
  }
}