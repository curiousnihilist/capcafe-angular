import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from '../model/employee.model';
import { Login } from '../model/login.model';
import { Observable } from 'rxjs';
import { Admin } from '../model/admin.model';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  public isUserloggedin:boolean=false;
  public isAdminloggedin:boolean=false;

  loggedInEmployee:Employee;
  loggedInAdmin:Admin;

  private LOGIN_URI = "http://localhost:8881/capcafe/employeeLogin";
  private SIGNUP_URI = "http://localhost:8888/front/add";
  private ADMIN_LOGIN_URI = "http://localhost:8888/front/adminLogin";

  constructor(private http:HttpClient) {
    this.loggedInEmployee = new Employee();
   }

  login(login:Login):Observable<Employee>{
    return this.http.post<Employee>(this.LOGIN_URI,login);
  }

  signup(employee:Employee):Observable<Employee>{
    return this.http.post<Employee>(this.SIGNUP_URI,employee);
  }

  loginAdmin(login:Login):Observable<Admin>{
    return this.http.post<Admin>(this.ADMIN_LOGIN_URI,login);
  }

  createSession(employee:Employee){
    this.isUserloggedin=true;
    this.loggedInEmployee = employee;
    localStorage.setItem("empId",this.loggedInEmployee.empId.toString())
    console.log(localStorage.getItem("empId"));
  }

  destroySession(){
    this.isUserloggedin=false;
    this.loggedInEmployee = new Employee();
    localStorage.clear();
    
  }

  createAdminSession(admin:Admin){
    this.isAdminloggedin=true;
    this.loggedInAdmin = admin;
    localStorage.setItem("empId",this.loggedInAdmin.empId.toString())

  }

  destroyAdminSession(){
    this.isAdminloggedin=false;
    this.loggedInAdmin = new Admin();
    localStorage.clear();
  }

  getEmpSession():Employee{
    return this.loggedInEmployee;
  }

  getAdminSession():Admin{
    return this.loggedInAdmin;
  }


}
