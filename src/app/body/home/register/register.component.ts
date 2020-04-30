import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private http: HttpClient) {}
  succ = 0;
  UserInfo = '';
  status: number;
  ngOnInit(): void {
  }

  OnSubmit(data){
    this.http.post<any>('http://localhost:8080/api/signup', { name: data.name, email: data.emailid,
     password: data.passwd }).subscribe(result => {
       this.status = result.status;
  });
}
}
