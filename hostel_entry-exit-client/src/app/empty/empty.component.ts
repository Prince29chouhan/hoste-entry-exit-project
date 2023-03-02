
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
    this.user1 = result
  })
  this.http.get<user>('http://127.0.0.1:8000/users/'+this.rollnum_2).subscribe((result:any)=>{
    this.user2 = result
  })

  console.log(this.user2);
  
  // localStorage.setItem('user1name',this.user1.name)
  // localStorage.setItem('user1hostelno',this.user1.hostel_no)
  // localStorage.setItem('user1rollno',this.user1.roll_no)
  
  
  // this.router.navigate(['/info'])  
  }

  }
  
  


