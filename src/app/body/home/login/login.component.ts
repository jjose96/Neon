import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private http: HttpClient) { }
  status;
  ngOnInit(): void {
  }

  OnSubmit(data){
    this.http.post<any>('https://app-neon.herokuapp.com/api/login', { email: data.emailid,
     password: data.passwd }).subscribe(result => {
       this.status = result.status;
       if (this.status === 1){
               window.location.href = '/dashboard';
       }
  });
}
}
