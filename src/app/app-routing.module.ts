import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddCafeComponent } from './add-cafe/add-cafe.component';
import { ViewCafeComponent } from './view-cafe/view-cafe.component';


const routes: Routes = [
  {path:'',redirectTo:'view-cafe',pathMatch:'full'},
  {path:'add-cafe',component:AddCafeComponent},
  {path:'view-cafe',component:ViewCafeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
