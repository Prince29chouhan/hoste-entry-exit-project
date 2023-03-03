
import { HttpClient } from '@angular/common/http';
import { Component, NgModule } from '@angular/core';
import { Router,Route } from '@angular/router';
import { database, databasewtime, tempdata, tempdatawtime, user } from '../interface';



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
  present:boolean=false;

  user1:user = {} as user
  user2:user = {} as user
  user3:user = {} as user
  tempcall:tempdata= {} as tempdata;
  tempcallwtime:tempdatawtime = {} as tempdatawtime
  datawtime:databasewtime = {} as databasewtime

  nodata:boolean=true
  temdata:boolean=false
  hostel_visit!:string    

  ngOnInit():void {   
    this.hostel_visit = localStorage.getItem('h_num')! 
    console.log(this.hostel_visit)
  }

  getusers(){   
    this.http.get<any>('http://127.0.0.1:8000/users/'+this.rollnum_1).subscribe((result:any)=>{ 
    this.user1 = result
  })
  this.http.get<any>('http://127.0.0.1:8000/users/'+this.rollnum_2).subscribe(result=>{
    this.user2 = result
  }) 
     
  this.nodata =false
  setTimeout(() => {
    console.log(this.user2.hostel_no);
    
    if(this.hostel_visit == this.user2.hostel_no){
    this.name_1 = this.user2.name
    this.name_2 = this.user1.name
    this.rollnum_1 = this.user2.roll_no
    this.rollnum_2 = this.user1.roll_no}
    else{
      this.name_1 = this.user1.name
      this.name_2 = this.user2.name
      this.rollnum_1 = this.user1.roll_no
      this.rollnum_2 = this.user2.roll_no}
      console.log(this.rollnum_1,this.rollnum_2)
  }, 1000);

   
  }

  deleteKey(){
    localStorage.removeItem('h_num') 
      this.router.navigate(
        ['/']
      )   
  }

  sendData(){
    this.tempcall.name_1=this.name_1;
    this.tempcall.name_2=this.name_2;
    this.tempcall.rollnum_1=this.rollnum_1;
    this.tempcall.rollnum_2=this.rollnum_2;
    this.tempcall.h_num=this.hostel_visit;  
    console.log(this.tempcall.h_num)     
    
    
  this.http.get<any>('http://127.0.0.1:8000/tempdata/'+this.rollnum_1).subscribe((result:any)=>{
     console.log(result);
     this.tempcallwtime = result

    if(result.rollnum_2==this.tempcall.rollnum_2 && result.h_num == this.tempcall.h_num){this.temdata = true
    this.http.post<database>('http://127.0.0.1:8000/database/',this.tempcallwtime).subscribe((res:any)=>
    {})
    this.http.delete<tempdata>('http://127.0.0.1:8000/tempdata/'+this.rollnum_1).subscribe((res:any)=>{}
    )}
    else if(result.rollnum_2!=this.tempcall.rollnum_2){console.log('Student Mismatch');this.temdata = true
    }
    else if(result.h_num == this.tempcall.h_num){console.log('Hostel Mismatch');this.temdata = true
    }
  }) 
  console.log(this.temdata);
  
  if(!this.temdata){
    this.http.post<tempdata>('http://127.0.0.1:8000/tempdata/',this.tempcall).subscribe((res:any)=>{        
    })
  }  

  } 
}

