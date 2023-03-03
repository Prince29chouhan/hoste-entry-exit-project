import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { tempdata } from '../interface';

@Component({
  selector: 'app-dashb',
  templateUrl: './dashb.component.html',
  styleUrls: ['./dashb.component.css']
})
export class DashbComponent {
constructor(
  private http: HttpClient
){}
gdgdg:tempdata={} as tempdata


senddata(){
  this.gdgdg.rollnum_1 = 'dwbdcc'
  this.gdgdg.rollnum_2 = 'vbhnjk'
  this.gdgdg.name_1 = 'qwerty'
  this.gdgdg.name_2 = 'asdfg'
  this.gdgdg.h_num = 'bd'
  console.log(this.gdgdg);
  
  this.http.post<tempdata>('http://127.0.0.1:8000/tempdata/',this.gdgdg).subscribe((result:any)=>{
    setTimeout(() => {
      console.log(result);
    }, 2000);
  })
}

}
