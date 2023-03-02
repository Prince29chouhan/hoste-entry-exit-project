
import { HttpClient } from '@angular/common/http';
import { Component, NgModule } from '@angular/core';
import { Router,Route } from '@angular/router';
import { tempdata, user } from '../interface';



@Component({
  selector: 'app-newcomp',
  templateUrl: './newcomp.component.html',
  styleUrls: ['./newcomp.component.css']
})
export class NewcompComponent {
  constructor(
    private http:HttpClient,
    private router:Router
  ){}
  name_1:string='';
  name_2:string='';
  rollnum_1:string='';
  rollnum_2:string='';
  tempcall:tempdata= {} as tempdata;

  user1:user = {} as user
  user2:user = {} as user
  user3:user = {} as user

  nodata:boolean=true
      
  ngOnInit():void {    
  }

  getusers(){   
    var hostel_visit = localStorage.getItem('h_num')

    this.http.get<any>('http://127.0.0.1:8000/users/'+this.rollnum_1).subscribe((result:any)=>{ 
    this.user1 = result
  })
  this.http.get<any>('http://127.0.0.1:8000/users/'+this.rollnum_2).subscribe(result=>{
    this.user2 = result
  }) 
     
  this.nodata =false
  setTimeout(() => {
    this.name_1 = this.user1.name
  }, 1000);
  
   
  }

  deleteKey(){
    localStorage.removeItem('h_num') 
      this.router.navigate(
        ['/login']
      )   
  }

  sendData(){
    console.log(this.name_1);
  this.tempcall.name_1=this.name_1;
  this.tempcall.name_2=this.name_2;
  this.tempcall.rollnum_1=this.rollnum_1;
  this.tempcall.rollnum_2=this.rollnum_2;
  this.tempcall.h_num=this.user1.hostel_no

  this.http.post<tempdata>('http://127.0.0.1:8000/tempdata/',this.tempcall).subscribe((result:any)=>{console.log(result);}) 
  }
 
}

