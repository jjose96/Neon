import { Component, OnInit } from '@angular/core';
import {HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private http: HttpClient) {
    this.http.post<any>('https://app-neon.herokuapp.com/api/dashboard').subscribe(result => {
       this.status = result.status;
       console.log(this.status);
       if (this.status === 0){
               window.location.href = '/';
       }
  });
  }
status: number;
  ngOnInit(): void {
  }

}
