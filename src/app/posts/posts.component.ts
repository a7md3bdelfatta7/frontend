import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';


@Component({
  selector: 'posts',
  templateUrl: './posts.component.html',
  styles: ['li{color:black;}']
})
export class PostsComponent implements OnInit {

  posts;

  constructor(private http:Http) { 

    this.http.get("http://localhost/gem/data.php?purpose=posts")
    .map(response=>{return response.json()}).subscribe((data)=>{
      this.posts=data;
    });

  }

  ngOnInit() {
  }

}
