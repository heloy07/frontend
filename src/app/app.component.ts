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
  search: string;
  add:    string;
  constructor(http:Http){
    this.http=http;
  }
  onAdd(){
  console.log('add : '+ this.add);
  /*this.http.put('https://localhost:8080',this.add).subscribe(response=>{
    this.posts=response.json();
  });*/

  }
  onSearch(){
    /*Url to be replaced*/

    this.http.get('localhost:10080/ad/create?'+this.search).subscribe(response=>{
      this.posts=response.json();

    });
    console.log('trying to search: '+this.search);

  }
  }
