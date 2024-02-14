import { HttpClient } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { Console } from 'console';
import { ToastrService } from "ngx-toastr";
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  loginStatus=signal(false);
  constructor(private http:HttpClient, private toaster:ToastrService ) { }
  apiurl='http://localhost:3000/user';
  apiurl2='http://localhost:3000/product'


  GetAll(){
    return this.http.get(this.apiurl);
  }
  Getbycode(code:any){
    console.log("code",code)
    console.log(`${this.apiurl}?name=${code.Username}`)
    // this.session={username:name};
    return this.http.get(`${this.apiurl}?name=${code}`);
  }

  Proceedregistration(inputdata:any){
    return this.http.post(this.apiurl,inputdata);
  }

  // Proceedlogin(inputdata:any){
  //   return this.http.post(this.apiurl,inputdata);
  // }

  Updateuser(code:any,inputdata:any){
    return this.http.put(this.apiurl+'/'+ code,inputdata);
  }

  IsloggedIn(){
    return sessionStorage.getItem('username')!=null;
  }
  GetUserRole(){
    return sessionStorage.getItem('userrole')!=null?sessionStorage.getItem('userrole')?.toString():'';
  }

  changeLoginStatus(value){
    // this.session=null;
    this.loginStatus.set(value);
  }

  GetAllCarsByOwnerId(userId: number){
    return this.http.get(this.apiurl + "GetAllCarsByOwnerId?id=" + userId)
  }

  Registration(inputdata:any){
    return this.http.post(this.apiurl2,inputdata);
  }

}
