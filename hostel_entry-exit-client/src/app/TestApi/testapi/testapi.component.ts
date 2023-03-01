import { HttpClient } from '@angular/common/http';
import { Component, NgModule } from '@angular/core';
import { API } from '../../interface'

@Component({
  selector: 'app-testapi',
  templateUrl: './testapi.component.html',
  styleUrls: ['./testapi.component.css']
})
export class TestapiComponent {

constructor(
  private http:HttpClient
    ){}

 name_1:string='';
 name_2:string='';
 rollnum_1:string='';
 rollnum_2:string='';
 apicall:API= {} as API;


 callapi(){
  this.apicall.name_1=this.name_1;
  this.apicall.name_2=this.name_2;
  this.apicall.rollnum_1=this.rollnum_1;
  this.apicall.rollnum_2=this.rollnum_2;

  this.http.post<API>('http://127.0.0.1:8000/database/',this.apicall).subscribe((result:any)=>{console.log(result);})
 }
}
