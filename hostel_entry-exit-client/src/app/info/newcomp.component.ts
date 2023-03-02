
import { HttpClient } from '@angular/common/http';
import { Component, NgModule } from '@angular/core';
import { Router,Route } from '@angular/router';
import { database } from '../../interface'


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
      user1:database= {} as database;
      user2:database= {} as database;
      
  ngOnInit():void {
    this.user1.name=localStorage.getItem('name_1')
    this.user2.name=localStorage.getItem('name_2')
    this.user1.roll_no=localStorage.getItem('rollnum_1')
    this.user2.roll_no=localStorage.getItem('rollnum_2')
    this.user1.hostel_no=localStorage.getItem('h_num')
    this.user2.hostel_no=localStorage.getItem('h_num')
    localStorage.removeItem('name_1')
    localStorage.removeItem('name_2')
    localStorage.removeItem('rollnum_1')
    localStorage.removeItem('rollnum_2')
    localStorage.removeItem('h_num')
   
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
    
  }
 
}

