import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import {  ToastrService} from "ngx-toastr";
import { AuthService } from '../../services/service/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-restration-car',
  templateUrl: './restration-car.component.html',
  styleUrl: './restration-car.component.css'
})
export class RestrationCarComponent {
  constructor(private builder:FormBuilder,private toaster:ToastrService,
    private service:AuthService,private router:Router){

  }

  RegisterForm = this.builder.group({
    brand: ['', Validators.required],
    carId: ['', Validators.required],
    imageUrl: ['', Validators.required],
    locationId: ['', Validators.required],
    name: ['', Validators.required],
    pricingDescription: ['', Validators.required],
    registeredOn: ['', Validators.required],
    locationTitle: ['', Validators.required],
    accessoriesTitle: ['', Validators.required],
    accessoriesId: ['', Validators.required],
    showOnWebsite: [false],
    stateData: [false]
  });
  Registration() {
    if (this.RegisterForm.valid) {
      this.service.Registration(this.RegisterForm.value).subscribe(
        (res: any) => {
          this.toaster.success('Registered Successfully');
          this.router.navigate(['/cars']);
        },
        (error) => {
          console.error('Error during registration:', error);
          this.toaster.error('Error occurred during registration. Please try again.');
        }
      );
    } else {
      this.toaster.warning('Please enter valid data');
    }
  }

}
