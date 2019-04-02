import { Component } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'frontend';
  posts: any[];
  http:Http;
  constructor(http:Http){
    this.http=http;
  }
  onSearch(){
    this.http.get('https://jsonplaceholder.typicode.com/posts').subscribe(response=>{
      this.posts=response.json();

    });
    console.log('trying to search');

  }
  }
