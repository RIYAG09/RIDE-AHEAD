import { Component,inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrl: './cars.component.css'
})
export class CarsComponent {

  constructor(private router: Router) {}

  // goToCards(){
  //   this.router.navigate(['/cars-card'])
  // }

  GoToCarRegistration(){
    this.router.navigate(['restration-car'])
  }

}
