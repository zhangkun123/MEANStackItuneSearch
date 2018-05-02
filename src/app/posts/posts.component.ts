import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import {MatPaginator, MatTableDataSource} from '@angular/material';
@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  // instantiate posts to an empty array
  posts: any = [];
  categories: any = [];
  questions: any = [];
  dataSource = new MatTableDataSource<Element>(this.categories);
  constructor( private http: Http) { }

  ngOnInit() {}

  randomAction(){
    this.http.get('http://jservice.io/api/random')
      .subscribe(response => {
        this.questions = response.json();
      })
  }

  displayCategoryAction(){
    this.http.get('http://jservice.io/api/categories?count=100')
      .subscribe(response => {
        this.categories = response.json();
      })
   
  }
  
}
