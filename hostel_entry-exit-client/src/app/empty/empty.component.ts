
import { HttpClient } from '@angular/common/http';
import { Component, NgModule } from '@angular/core';
import { API } from '../interface'
import { rollno1 } from '../interface';

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
   apicall:API= {} as API;
  
   user1:rollno1 = {} as rollno1
  
  
  
   callapi(){
    this.apicall.name_1=this.name_1;
    this.apicall.name_2=this.name_2;
    this.apicall.rollnum_1=this.rollnum_1;
    this.apicall.rollnum_2=this.rollnum_2;
  
    this.http.post<API>('http://127.0.0.1:8000/database/',this.apicall).subscribe((result:any)=>{console.log(result);})}
  
  callroll_1(){
    this.user1.rollnum_1=this.rollnum_1;
    this.user1.rollnum_2=this.rollnum_2;
  
    this.http.post<rollno1>('http://127.0.0.1:8000/database/',this.user1).subscribe((result:any)=>{console.log(result);})
  
    this.http.get<rollno1>('http://127.0.0.1:8000/users/'+this.rollnum_1).subscribe((result:any)=>{console.log(result);
    this.user1.name_1 =result.name_1
    this.user1.name_2 =result.name_2
    this.user1.rollnum_1 =result.rollnum_1
    this.user1.rollnum_2 =result.rollnum_2
    this.user1.in_time =result.in_time
    this.user1.out_time =result.out_time
  })
  
  
   }
  }
  


