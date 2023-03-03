import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { tempdata, databasewtime } from 'src/app/interface';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent {
  indata!:Array<databasewtime>
  h_num:string=''
  
  constructor(
    private http:HttpClient,
    private router:Router
  ){}
  ngOnInit():void {
    this.h_num = localStorage.getItem('h_num')!
    this.http.get<databasewtime>('http://127.0.0.1:8000/database/').subscribe((res:any)=>
    this.indata = res
    )
  }
  logout(){
    localStorage.removeItem('h_num')
    this.router.navigate(['/'])
  }

}
