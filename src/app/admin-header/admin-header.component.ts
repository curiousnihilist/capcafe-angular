import { Component, OnInit } from '@angular/core';
import { LoginServiceService } from '../service/login-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'admin-header',
  templateUrl: './admin-header.component.html',
  styleUrls: ['./admin-header.component.css']
})
export class AdminHeaderComponent implements OnInit {

  constructor(private loginService:LoginServiceService, private route:Router) { }

  ngOnInit() {
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
