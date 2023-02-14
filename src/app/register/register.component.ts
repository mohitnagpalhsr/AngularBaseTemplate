import { Component } from '@angular/core';
import { register } from 'src/Models/register';
import { AppService } from '../app.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent {
  s:register={username:"",password:""};
  message="";

  constructor(private appservice:AppService) { }

  save(data:any):void{
    this.appservice.registerUser(data).subscribe(
      data=>{
        this.message="User Registered Successfully";
     }
    ) 
     console.log(data);
     console.log(this.s);
   }
}