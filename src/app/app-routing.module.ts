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
import { RouteGaurdService } from './service/route-gaurd.service';
import { AboutComponent } from './about/about.component';
import { AddMoneyComponent } from './add-money/add-money.component';
import { AdminReviewsComponent } from './admin-reviews/admin-reviews.component';


const routes: Routes = [
  {path:'',redirectTo:'cust-home',pathMatch:'full'},
  {path:'add-cafe',component:AddCafeComponent, canActivate: [RouteGaurdService]},
  {path:'view-cafe',component:ViewCafeComponent, canActivate: [RouteGaurdService]},
  {path:'update-cafe', component:UpdateCafeComponent, canActivate: [RouteGaurdService]},
  {path:'cust-home', component:CustHomeComponent},
  {path:'view-menu', component:ViewMenuComponent, canActivate: [RouteGaurdService]},
  {path:'add-review', component:AddReviewComponent, canActivate: [RouteGaurdService]},
  {path:'raise-ticket', component:RaiseTicketComponent, canActivate: [RouteGaurdService]},
  {path:'solve-ticket', component:SolveTicketComponent, canActivate: [RouteGaurdService]},
  {path:'login', component:LoginComponent},
  {path:'signup', component:SignupComponent},
  {path:'transaction', component:TransactionComponent, canActivate: [RouteGaurdService]},
  {path:'about', component:AboutComponent, canActivate: [RouteGaurdService]},
  {path:'add-money', component:AddMoneyComponent, canActivate: [RouteGaurdService]},
  {path:'admin-review', component:AdminReviewsComponent, canActivate: [RouteGaurdService]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
