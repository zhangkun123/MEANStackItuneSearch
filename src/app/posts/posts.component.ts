import { Component, OnInit } from '@angular/core';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  // instantiate posts to an empty array
  posts: any = [];
  searchResults: any = [];
  searchObj: object = {};
  keywordValue = '';
  noResult: boolean;
  constructor(private postsService: PostsService) { }

  ngOnInit() {}
  searchAction(){
    this.searchObj["term"] = this.keywordValue;

    this.postsService.getAllSearch(this.searchObj).subscribe(search => {
      if (search.results.length == 0) {
        this.noResult = true;
      } else {
        this.searchResults = search.results;
        this.noResult = false;
      }
      console.log("this.searchResults", this.searchResults);
    });
  }
}
