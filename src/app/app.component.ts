import { Component, effect, inject } from '@angular/core';
import { Router } from "@angular/router";
import { AuthService } from './services/service/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ride_ahead';
  authObj = inject(AuthService)
  status :boolean;
  constructor(private router:Router){
    effect(()=>this.status=this.authObj.loginStatus())
  }

  openRegister(){
    this.router.navigate(['/register']);
  
  }
  
  openLogin(){
    this.router.navigate(['/login']);
    }
  
  logout(){
    this.router.navigate(['/login']);
    this.authObj.changeLoginStatus(false);
  }
  }
  
  
  
  

