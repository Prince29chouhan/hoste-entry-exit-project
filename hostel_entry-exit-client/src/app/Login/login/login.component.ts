import { HttpClient } from '@angular/common/http';
import { Component, NgModule } from '@angular/core';
import { hostel } from '../../interface'
import { Router,Route } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
 user_id:string='';
 password:string='';
 sign:hostel= {} as hostel;

 constructor(
  private http:HttpClient, private router:Router
    ){}
ngOnInit(){
  if(localStorage.getItem('h_num') != null)
  {
    this.router.navigate(
      ['/info']
    )

  }
  
}
    sign_in(){
      this.sign.user_id=this.user_id;
      this.sign.password=this.password;

      this.http.get<hostel>('http://127.0.0.1:8000/hostels/'+this.user_id).subscribe((result:any)=>{
     if(result.username==this.sign.user_id && result.password==this.sign.password){
      localStorage.setItem('h_num',result.h_num)
      this.router.navigate( ['/info'])
     }
    else{
      alert("Wrong password or User ID")  
    }
    })
}
}