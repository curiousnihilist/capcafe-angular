import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AdminHeaderComponent } from './admin-header/admin-header.component';
import { AddCafeComponent } from './add-cafe/add-cafe.component';
import { FormsModule } from '@angular/forms';
import { ViewCafeComponent } from './view-cafe/view-cafe.component';
import { HttpClientModule } from '@angular/common/http';
import { UpdateCafeComponent } from './update-cafe/update-cafe.component';
import { CustHomeComponent } from './cust-home/cust-home.component';
import { ViewMenuComponent } from './view-menu/view-menu.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AdminHeaderComponent,
    AddCafeComponent,
    ViewCafeComponent,
    UpdateCafeComponent,
    CustHomeComponent,
    ViewMenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
