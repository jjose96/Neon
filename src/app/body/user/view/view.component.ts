import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

title;
notes;
  constructor(private http: HttpClient) {
    this.http.post<any>('https://app-neon.herokuapp.com/api/notes', {}).subscribe(result => {
       this.title = result.title;
       this.notes = result.note;
   });
  }

  ngOnInit(): void {
  }

}
