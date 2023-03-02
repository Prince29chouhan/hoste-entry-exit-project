
import { HttpClient } from '@angular/common/http';
import { Component, NgModule } from '@angular/core';
import { Router,Route } from '@angular/router';
import { tempdata, database } from '../interface';



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
      
  ngOnInit():void {
    //get dono users
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

