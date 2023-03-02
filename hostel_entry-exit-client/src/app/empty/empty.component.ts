
import { HttpClient } from '@angular/common/http';
import { Component, NgModule } from '@angular/core';
import { database, user } from '../interface'
import { Router,Route } from '@angular/router';


@Component({
  selector: 'app-empty',
  templateUrl: './empty.component.html',
  styleUrls: ['./empty.component.css']
})
export class EmptyComponent {
  constructor(
    private http:HttpClient,
    private router:Router
      ){}
  
   name_1:string='';
   name_2:string='';
   rollnum_1:string='';
   rollnum_2:string='';
   data:database= {} as database;
  
   user1:user = {} as user
   user2:user = {} as user
   user3:user = {} as user
  
  getusers(){   
    var hostel_visit = localStorage.getItem('h_num')

    this.http.get<user>('http://127.0.0.1:8000/users/'+this.rollnum_1).subscribe((result:any)=>{ 
    this.user1.name =result.name
    this.user1.hostel_no =result.hostel_no
    this.user1.room_no =result.room_no
    this.user1.roll_no=result.roll_no
  })
  this.http.get<user>('http://127.0.0.1:8000/users/'+this.rollnum_2).subscribe((result:any)=>{
    this.user2.name =result.name
    this.user2.hostel_no =result.hostel_no
    this.user2.room_no =result.room_no
    this.user2.roll_no=result.roll_no
  })

  if(hostel_visit == this.user2.hostel_no.toString()){
    this.user3 = this.user1
    this.user1 = this.user2
    this.user2 = this.user3
  }

  //set both users ka name, hostel, roll number
  localStorage.setItem('user1.name',this.user1.name)
  localStorage.setItem('user1.hostel_no',this.user1.hostel_no)
  localStorage.setItem('user1.roll_no',this.user1.roll_no)

  localStorage.setItem('user2.name',this.user1.name)
  localStorage.setItem('user2.hostel_no',this.user1.hostel_no)
  localStorage.setItem('user2.roll_no',this.user1.roll_no)
  
  //redirect to info
  
      this.router.navigate(
        ['/info']
      )  
  }

  }
  
  


