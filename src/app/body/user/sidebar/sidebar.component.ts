import { Component, OnInit } from '@angular/core';
import {HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  constructor(private http: HttpClient) {
    this.http.post<any>('https://app-neon.herokuapp.com/api/dashboard', {test: '123'}).subscribe(result => {
       this.status = result.status;
       this.user = result.user;
  });
}
status: number;
user: any;

  ngOnInit(): void {
  }

}
