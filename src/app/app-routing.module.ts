import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { BookingComponent } from './components/booking/booking.component';
import { CarsComponent } from './components/cars/cars.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { UserlistingComponent } from './components/userlisting/userlisting.component';
import { AuthGuard } from './services/guard/auth.guard';
import { CarsCardComponent } from './reusableComponent/cars-card/cars-card.component';
import {RestrationCarComponent} from '../app/components/restration-car/restration-car.component'

const routes: Routes = [
  {
    path:'',
    redirectTo:'home',
    pathMatch:'full'
  },
  {
    path:'home',
    component:HomeComponent,canActivate:[AuthGuard]
  },
  {
    path:'register',
    component:RegisterComponent
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'user',
    component:UserlistingComponent,canActivate:[AuthGuard]
  },

  {
    path:'search',
    component:SearchComponent
  },
  {
    path: 'restration-car',
    component: RestrationCarComponent
  },
  {
    path:'booking',
    component:BookingComponent
  },
  {
    path:'cars',
    component:CarsComponent
  },
  {
    path:'cars-card',
    component:CarsCardComponent
  }

]
;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}