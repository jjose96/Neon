import { Component, OnInit } from '@angular/core';
import {HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private http: HttpClient) {
    this.http.get<any>('http://localhost:8081/api/dashboard').subscribe(result => {
       this.status = result.status;
       if (this.status === 0){
               window.location.href = '/';
       }
  });
  }
status: number;
  ngOnInit(): void {
  }

}
