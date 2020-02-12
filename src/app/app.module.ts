import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {NgxPaginationModule} from 'ngx-pagination';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AdminHeaderComponent } from './admin-header/admin-header.component';
import { AddCafeComponent } from './add-cafe/add-cafe.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ViewCafeComponent } from './view-cafe/view-cafe.component';
import { HttpClientModule } from '@angular/common/http';
import { UpdateCafeComponent } from './update-cafe/update-cafe.component';
import { CustHomeComponent } from './cust-home/cust-home.component';
import { ViewMenuComponent } from './view-menu/view-menu.component';
import { AddReviewComponent } from './add-review/add-review.component';
import { RaiseTicketComponent } from './raise-ticket/raise-ticket.component';
import { SolveTicketComponent } from './solve-ticket/solve-ticket.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { TransactionComponent } from './transaction/transaction.component';
import { AboutComponent } from './about/about.component';
import { AddMoneyComponent } from './add-money/add-money.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AdminHeaderComponent,
    AddCafeComponent,
    ViewCafeComponent,
    UpdateCafeComponent,
    CustHomeComponent,
    ViewMenuComponent,
    AddReviewComponent,
    RaiseTicketComponent,
    SolveTicketComponent,
    LoginComponent,
    SignupComponent,
    TransactionComponent,
    AboutComponent,
    AddMoneyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgxPaginationModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
