import { Routes } from '@angular/router';
import { HomeComponent } from '../pages/home/home.component';
import { AboutComponent } from '../pages/about/about.component';
import { ApplicationComponent } from '../pages/application/application.component';
import { ParkingEcoComponent } from '../pages/parking-eco/parking-eco.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'application',
    component: ApplicationComponent,
  },
  {
    path: 'parking-eco',
    component: ParkingEcoComponent,
  },
  {
    path: '**',
    component: HomeComponent,
  },
];
