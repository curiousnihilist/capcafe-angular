import { Component, OnInit } from '@angular/core';
import { LoginServiceService } from '../service/login-service.service';
import { Router } from '@angular/router';
import { Employee } from '../model/employee.model';
import { Admin } from '../model/admin.model';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isloggedInUser:boolean;
  isloggedInAdmin:boolean;
  employee:Employee;
  admin:Admin;
  constructor(private loginService:LoginServiceService, private route:Router) {
    this.employee = new Employee();
    this.admin = new Admin();
  }

  ngOnInit() {
    // if(localStorage.getItem("empId")!=null){
    //   this.employee =  this.loginService.getEmpSession();
    //   this.isloggedInUser = true;
    // }
    // else{
    //   this.isloggedInUser =false;
    // }
        
  }

  logout(){
    if(confirm("Want to logout?")){
    this.loginService.destroySession();
    this.loginService.destroyAdminSession();
    this.route.navigate(['/login']);
    }
  }

}
