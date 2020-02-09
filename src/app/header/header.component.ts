import { Component, OnInit } from '@angular/core';
import { LoginServiceService } from '../service/login-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private loginService:LoginServiceService, private route:Router) { 
  }

  ngOnInit() {
  }

  logout(){
    if(confirm("Want to logout?")){
    this.loginService.destroySession();
    this.loginService.destroyAdminSession();
    this.route.navigate(['/login']);
    }
  }

}
