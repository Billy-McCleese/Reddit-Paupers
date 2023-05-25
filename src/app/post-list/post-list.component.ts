import { Component, OnInit } from '@angular/core';
import { RedditService } from '../reddit.service';
import { RedditPost } from '../reddit-post';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
  posts: RedditPost[] = [];

  constructor(private redditService: RedditService) { }

  ngOnInit() {
    this.redditService.getPosts().subscribe((response) => {
      this.posts = response.data.children;
    });
  }
}
