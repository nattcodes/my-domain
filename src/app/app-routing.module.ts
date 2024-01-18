import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeSectionComponent } from './home-section/home-section.component';
import { CountryinfoComponent } from './countryinfo/countryinfo.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeSectionComponent,
  },
  {
    path: ':country',
    component: CountryinfoComponent,
  },
  {
    path: '',
    redirectTo: '/home', // Redirect to the 'home' component
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
