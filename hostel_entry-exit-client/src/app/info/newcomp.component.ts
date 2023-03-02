
import { HttpClient } from '@angular/common/http';
import { Component, NgModule } from '@angular/core';
import { Router,Route } from '@angular/router';



@Component({
  selector: 'app-newcomp',
  templateUrl: './newcomp.component.html',
  styleUrls: ['./newcomp.component.css']
})
export class NewcompComponent {
  constructor(
    private http:HttpClient, private router:Router
      ){}
 
  deleteKey(){
    localStorage.removeItem('h_num') 
    
      this.router.navigate(
        ['/login']
      )
  
    
  }}

