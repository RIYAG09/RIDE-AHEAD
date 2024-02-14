import { Component } from '@angular/core';
import { FormBuilder, Validators } from "@angular/forms";
import { ToastrService } from "ngx-toastr";
import { AuthService } from '../../services/service/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  constructor(private builder:FormBuilder,private toaster:ToastrService,
    private service:AuthService,private router:Router){

  }

  registerForm=this.builder.group({
    // id:this.builder.control('',Validators.compose([Validators.required,Validators.minLength(5)])),
    name:this.builder.control('',Validators.required),
    password:this.builder.control('',Validators.compose([Validators.required,Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,12}$')])),
    email:this.builder.control('',Validators.compose([Validators.required,Validators.email])),
    role:this.builder.control('',Validators.required),
    mobile:this.builder.control('',Validators.required),
    // isactive:this.builder.control(false)
  });

  proceedRegistration(){
    if(this.registerForm.valid){
      this.service.Proceedregistration(this.registerForm.value).subscribe(res=>{
        this.toaster.success('Registred Successful');
        this.router.navigate(['login']);
      });
    }else{
      this.toaster.warning('Please enter valid data');
    }
  }
}
