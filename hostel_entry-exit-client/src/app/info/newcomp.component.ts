
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
<<<<<<< HEAD
  user1:user= {} as user; 
  user2:user= {} as user; 
=======
  name_1:string='';
  name_2:string='';
  rollnum_1:string='';
  rollnum_2:string='';
  tempcall:tempdata= {} as tempdata;
      
>>>>>>> d282f33ca26c4af4b6e050cefd5c6dcfb2a8f1c2
  ngOnInit():void {
    this.user1.name!=localStorage.getItem('user1.name')
    this.user2.name!=localStorage.getItem('user2.name')
    this.user1.roll_no!=localStorage.getItem('user1.roll_no')
    this.user2.roll_no!=localStorage.getItem('user2.roll_no')
    this.user1.hostel_no!=localStorage.getItem('user1.hostel_no')
    this.user2.hostel_no!=localStorage.getItem('user2.hostel_no')
    localStorage.removeItem('user1.name')
    localStorage.removeItem('user2.name')
    localStorage.removeItem('user1.roll_no')
    localStorage.removeItem('user2.roll_no')
    localStorage.removeItem('user1.hostel_no')
    localStorage.removeItem('user2.hostel_no')
   
    //localStorage.getItem()
    //store in variables fir remove both from localstorage
    //localStorage.removeItem
  }

  deleteKey(){
    localStorage.removeItem('h_num') 
      this.router.navigate(
        ['/login']
      )   
  }

  sendData(){
    this.tempcall.name_1=this.name_1;
  this.tempcall.name_2=this.name_2;
  this.tempcall.rollnum_1=this.rollnum_1;
  this.tempcall.rollnum_2=this.rollnum_2;

  this.http.post<tempdata>('http://127.0.0.1:8000/tempdata/',this.tempcall).subscribe((result:any)=>{console.log(result);}) 
  }
 
}

