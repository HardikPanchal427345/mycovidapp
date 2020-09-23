import { CountryComponent } from './country/country.component';
import { HomecomponentComponent } from './homecomponent/homecomponent.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: 'home', component: HomecomponentComponent },
  { path: 'country', component: CountryComponent },


  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
