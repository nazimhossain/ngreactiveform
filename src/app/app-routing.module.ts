import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import{RouterModule,Routes} from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { FormcreateComponent } from './formcreate/formcreate.component';



const routes: Routes=[
  { path: '', redirectTo: '', pathMatch: 'full' },
  {path: 'navbar', component: NavbarComponent},
  {path: 'formcreate',component: FormcreateComponent},
 
  
  
 
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
