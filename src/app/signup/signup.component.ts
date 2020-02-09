import { Component, OnInit, ViewChild } from '@angular/core';
import { Employee } from '../model/employee.model';
import { NgForm } from '@angular/forms';
import { LoginServiceService } from '../service/login-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  employee=new Employee();
  @ViewChild('f',{static: false}) signupForm:NgForm;
  constructor(private employeeService:LoginServiceService, private router:Router) { }

  ngOnInit() {
  }

  onSubmit(){
    console.log(this.signupForm.value);
    this.employee.capgeminiId=this.signupForm.value.capgeminiId;
    this.employee.email=this.signupForm.value.email;
    this.employee.name=this.signupForm.value.name;
    this.employee.password=this.signupForm.value.password;
    this.employee.gender=this.signupForm.value.gender; 
    this.employeeService.signup(this.employee).subscribe((data)=>{
      console.log(data);
    })
    this.router.navigate(['/login']);
  }

}
