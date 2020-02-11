import { Component, OnInit, ViewChild } from '@angular/core';
import { Login } from '../model/login.model';
import {NgForm} from '@angular/forms';
import {ActivatedRoute, Params, Router } from '@angular/router';
import { LoginServiceService } from '../service/login-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  private login:Login;
  
  constructor(private loginService:LoginServiceService,private router:Router){
    this.login = new Login();
  }
  ngOnInit() {

    if(this.loginService.isUserloggedin)
      this.router.navigate(['/cust-home']);
    if(this.loginService.isAdminloggedin)
      this.router.navigate(['/view-cafe']);
    
  }

  onSubmit(){
  if(this.login.capgeminiId=="12345" ){
    this.loginService.loginAdmin(this.login).subscribe(admin => {if(admin !=null){
                                                                this.loginService.createAdminSession(admin);
                                                                alert("Login Successfull!");
                                                                this.router.navigate(['/view-cafe']);
                                                              }
                                                              else{
                                                                alert("Invalid Credentials! Please try again");
                                                              }
      })
  }
  else{
    this.loginService.login(this.login).subscribe(employee =>{
                                                              if(employee !=null){
                                                                this.loginService.createSession(employee);
                                                                alert("Login Successfull!");
                                                                console.log(this.loginService.isAdminloggedin);
                                                                console.log(this.loginService.isUserloggedin);
                                                                
                                                              this.router.navigate(['/cust-home']);
                                                              }
                                                              else{
                                                                alert("Invalid Credentials! Please try again");
                                                              }
                                                              })

  }

    

   
  }


}
