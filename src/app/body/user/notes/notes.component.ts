import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {
data;
  constructor(private http: HttpClient) {
    this.http.post<any>('https://app-neon.herokuapp.com/api/notes', {test: '123'}).subscribe(result => {
       this.data = result.note;
   });
  }
   status;
  ngOnInit(): void {
  }
  OnSubmit(data){
    this.http.post<any>('https://app-neon.herokuapp.com/api/create', { title: data.title, notes: data.notes }).subscribe(result => {
       this.status = result.status;
  });
}
}
