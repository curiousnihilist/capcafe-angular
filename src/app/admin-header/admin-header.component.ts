import { Component, OnInit } from '@angular/core';
import { LoginServiceService } from '../service/login-service.service';
import { Router } from '@angular/router';
import { Admin } from '../model/admin.model';

@Component({
  selector: 'admin-header',
  templateUrl: './admin-header.component.html',
  styleUrls: ['./admin-header.component.css']
})
export class AdminHeaderComponent implements OnInit {

  isloggedInAdmin:boolean;
  admin:Admin;

  constructor(private loginService:LoginServiceService, private route:Router) {
    this.admin = new Admin();
   }

  ngOnInit() {
    if(localStorage.getItem("empId")!=null){
      this.admin =  this.loginService.getEmpSession();
      this.isloggedInAdmin = true;
    }
  }

  logout(){
    if(confirm("Want to logout?")){
      this.loginService.destroyAdminSession();
      this.route.navigate(['/login']);
    }
    else{
      
    }
    
  }

}
