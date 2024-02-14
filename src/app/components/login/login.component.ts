import { Component,inject } from '@angular/core';
import { FormBuilder, Validators } from "@angular/forms";
import { AuthService } from '../../services/service/auth.service';
import { Router } from '@angular/router';
import { ToastrService} from "ngx-toastr";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  authService = inject(AuthService)
  constructor(private builder:FormBuilder,private toaster:ToastrService,
    private service:AuthService,private router:Router){
    

  }

  userdata:any;
  loginForm=this.builder.group({
    Username:this.builder.control('',Validators.required),
    password:this.builder.control('',Validators.required)
  });


  proceedLogin(){
    if (this.loginForm.valid) {
      this.service.Getbycode(this.loginForm.value.Username).subscribe(res => {
        this.userdata = res[0];
        console.log("res",res);
        console.log(this.userdata);
        console.log("userpassword",res[0].password)
        console.log("loginpassword",this.loginForm.value.password)
        if (this.userdata.password === this.loginForm.value.password) {

          sessionStorage.setItem('username',this.userdata.id);
          sessionStorage.setItem('role',this.userdata.role);
          
          this.router.navigate(['/home']);
          this.authService.changeLoginStatus(true);
        }else {
          this.toaster.warning('Invalid data');
          }
      });
    } else {
      this.toaster.warning('Please enter valid data.')
    }
  }

  }

