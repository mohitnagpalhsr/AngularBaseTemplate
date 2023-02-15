import { Component } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-sports',
  templateUrl: './sports.component.html',
  styleUrls: ['./sports.component.css']
})
export class SportsComponent {
  sports: any;
  hello="hello";

  // constructor(private http: HttpClient) { }

  // ngOnInit(): void {
  //   this.http.get("https://localhost:5001/api/sports")
  //   .subscribe({
  //     next: (result: any) => this.sports = result,
  //     error: (err: HttpErrorResponse) => console.log(err)
  //   })
  // }
}