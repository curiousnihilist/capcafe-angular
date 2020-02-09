import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddCafeComponent } from './add-cafe/add-cafe.component';
import { ViewCafeComponent } from './view-cafe/view-cafe.component';
import { UpdateCafeComponent } from './update-cafe/update-cafe.component';
import { CustHomeComponent } from './cust-home/cust-home.component';
import { ViewMenuComponent } from './view-menu/view-menu.component';
import { AddReviewComponent } from './add-review/add-review.component';
import { RaiseTicketComponent } from './raise-ticket/raise-ticket.component';
import { SolveTicketComponent } from './solve-ticket/solve-ticket.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { TransactionComponent } from './transaction/transaction.component';


const routes: Routes = [
  {path:'',redirectTo:'cust-home',pathMatch:'full'},
  {path:'add-cafe',component:AddCafeComponent},
  {path:'view-cafe',component:ViewCafeComponent},
  {path:'update-cafe', component:UpdateCafeComponent},
  {path:'cust-home', component:CustHomeComponent},
  {path:'view-menu', component:ViewMenuComponent},
  {path:'add-review', component:AddReviewComponent},
  {path:'raise-ticket', component:RaiseTicketComponent},
  {path:'solve-ticket', component:SolveTicketComponent},
  {path:'login', component:LoginComponent},
  {path:'signup', component:SignupComponent},
  {path:'transaction', component:TransactionComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
