import { CommonModule, JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,ReactiveFormsModule, CommonModule, JsonPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ReactiveForm';

  cities:string[] = ["Pune", "Amravati", "Mumbai", "Kolkata"];
  zips:number[] = [411045, 444606, 444555, 444555, 444555, 444555, 444555];

  studentForm: FormGroup  = new FormGroup({
    firstName: new FormControl('',[Validators.required, Validators.minLength(4)]),
    lastName: new FormControl('',[Validators.required]),
    age: new FormControl('',[Validators.required]),
    grade: new FormControl('',[Validators.required]),
    city: new FormControl('',[Validators.required]),
    zip: new FormControl('',[Validators.required])
  });

  studentFormValueFromFrom: any;
  onSubmit():void{
      this.studentFormValueFromFrom = this.studentForm.value;
  }
  onReset():void{
    this.studentFormValueFromFrom = undefined;
  }
}
