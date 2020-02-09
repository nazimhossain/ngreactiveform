import { Component } from '@angular/core';
import{FormGroup, Validators, FormControl, FormBuilder} from '@angular/forms';
import{HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ngdinamicform';
  signupForm: FormGroup;
  

  ngOnInit(){
    this.signupForm= new FormGroup({
     'name': new FormControl(null, Validators.required),
     'select': new FormControl(null, Validators.required),
     'placeholder': new FormControl(null, Validators.required),
     'checkbox': new FormControl(null, Validators.required),
     'points': new FormControl(null, Validators.required),
     'select1': new FormControl(null, Validators.required),
     

    });

  }
  constructor(private formBuilder: FormBuilder,private http: HttpClient){}
  onSubmit(){
    console.log(this.signupForm.value);
    this.signupForm.reset();
  }
}
