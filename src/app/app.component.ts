import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sampleAngular';
  // isSubmitted = false;
  // City: any = ['Florida', 'South Dakota', 'Tennessee', 'Michigan'];
  // constructor(public fb: FormBuilder) {}
  // registrationForm = this.fb.group({
  //   cityName: ['', [Validators.required]],
  // });
  // changeCity(e: any) {
  //   this.cityName?.setValue(e.target.value, {
  //     onlySelf: true,
  //   });
  // }
  // // Access formcontrols getter
  // get cityName() {
  //   return this.registrationForm.get('cityName');
  // }
  // onSubmit(): void {
  //   console.log(this.registrationForm);
  //   this.isSubmitted = true;
  //   if (!this.registrationForm.valid) {
  //     false;
  //   } else {
  //     console.log(JSON.stringify(this.registrationForm.value));
  //   }
  // }
}
