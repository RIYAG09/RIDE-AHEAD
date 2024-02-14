import { HttpClient } from '@angular/common/http';
import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-cars-card',
  templateUrl: './cars-card.component.html',
  styleUrl: './cars-card.component.css'
})
export class CarsCardComponent  implements OnInit{

  userList:any;
  constructor(private httpClient : HttpClient){
    this.userList=[];
  }

  ngOnInit(): void {
    console.log("method called")
    this.getUserList()
  }
  getUserList(){
    this.httpClient.get('http://localhost:3000/product').subscribe((result:any)=>
    {
      for(let i=0;i<result.length;i++){

        this.userList.push(result[i]);
      }

    }
  )}

}
