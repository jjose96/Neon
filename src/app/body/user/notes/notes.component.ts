import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {
status;
title;
notes;
error;
  constructor(private http: HttpClient) {
    this.http.post<any>('https://app-neon.herokuapp.com/api/notes', {}).subscribe(result => {
       this.title = result.title;
       this.notes = result.note;
   });
  }
  ngOnInit(): void {
  }
  OnSubmit(data){
    if (data.title.length > 0){
      if (data.notes.length > 0 ){
        this.http.post<any>('https://app-neon.herokuapp.com/api/create', { title: data.title, notes: data.notes }).subscribe(result => {
          this.status = result.status;
        });
        }
        else{
          this.status = 2;
        }
  }
  else{
    this.status = 3;
  }
}

}

