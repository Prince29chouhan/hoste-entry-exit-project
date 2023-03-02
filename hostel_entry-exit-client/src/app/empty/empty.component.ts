
import { HttpClient } from '@angular/common/http';
import { Component, NgModule } from '@angular/core';
import { database, user } from '../interface'


@Component({
  selector: 'app-empty',
  templateUrl: './empty.component.html',
  styleUrls: ['./empty.component.css']
})
export class EmptyComponent {
  constructor(
    private http:HttpClient
      ){}
  
   name_1:string='';
   name_2:string='';
   rollnum_1:string='';
   rollnum_2:string='';
   apicall:database= {} as database;
  
   user1:user = {} as user
  
  
  
   callapi(){
    this.apicall.name_1=this.name_1;
    this.apicall.name_2=this.name_2;
    this.apicall.rollnum_1=this.rollnum_1;
    this.apicall.rollnum_2=this.rollnum_2;
  
    this.http.post<database>('http://127.0.0.1:8000/database/',this.apicall).subscribe((result:any)=>{console.log(result);})}
  
  callroll_1(){
    
  
    // this.http.post<rollno1>('http://127.0.0.1:8000/database/',this.user1).subscribe((result:any)=>{console.log(result);})
  
    this.http.get<user>('http://127.0.0.1:8000/users/'+this.rollnum_1).subscribe((result:any)=>{console.log(result);
    this.user1.name =result.name
    this.user1.hostel_no =result.hostel_no
    this.user1.room_no =result.room_no
    this.user1.roll_no=result.roll_no
    
  })
  this.http.get<user>('http://127.0.0.1:8000/users/'+this.rollnum_2).subscribe((result:any)=>{console.log(result);
    this.user1.name =result.name
    this.user1.hostel_no =result.hostel_no
    this.user1.room_no =result.room_no
    this.user1.roll_no=result.roll_no
    
  })
   }
  }
  


