import { Component, NgModule } from '@angular/core';
import { API } from '../../interface'

@Component({
  selector: 'app-testapi',
  templateUrl: './testapi.component.html',
  styleUrls: ['./testapi.component.css']
})
export class TestapiComponent {


 name_1:string='';
 name_2:string='';
 rollnum_1:string='';
 rollnum_2:string='';
 apicall!:API;


 callapi(){
  this.apicall.name_1=this.name_1;
  this.apicall.name_2=this.name_2;
  this.apicall.rollnum_1=this.rollnum_1;
  this.apicall.rollnum_2=this.rollnum_2;
  console.log("skdf",this.name_1,this.name_2,this.apicall);
  
 }
}
