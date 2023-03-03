import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { tempdata, tempdatawtime } from 'src/app/interface';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  indata!:Array<tempdatawtime>
  h_num:string=''
  
  constructor(
    private http:HttpClient,
    private router:Router
  ){}

  ngOnInit():void {
    this.h_num = localStorage.getItem('h_num')!
    console.log(this.h_num);
    
    this.http.get<tempdatawtime>('http://127.0.0.1:8000/tempdata/').subscribe((res:any)=>
    this.indata = res
    )
  }

  logout(){
    localStorage.removeItem('h_num')
    this.router.navigate(['/'])
  }

}
