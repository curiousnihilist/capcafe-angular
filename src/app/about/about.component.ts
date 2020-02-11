import { Component, OnInit } from '@angular/core';
import { LoginServiceService } from '../service/login-service.service';
import { Employee } from '../model/employee.model';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  private employee:Employee;
  constructor(private loginService:LoginServiceService) { 
    this.employee = new Employee();
  }

  ngOnInit() {
    this.employee = this.loginService.getEmpSession();
  }



}
