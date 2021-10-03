import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DevopsComponent } from './devops/devops.component';
import { ListDevopsComponent } from './list-devops/list-devops.component';

const routes: Routes = [
  {path:"devops",component:DevopsComponent},
  {path:"listDevops", component:ListDevopsComponent},
  {path:"",redirectTo:"/",pathMatch:"full"}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
