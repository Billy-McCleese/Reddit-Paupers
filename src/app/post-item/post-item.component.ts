import { Component, Input } from '@angular/core';
import { RedditPost } from '../reddit-post';

@Component({
  selector: 'app-post-item',
  templateUrl: './post-item.component.html',
  styleUrls: ['./post-item.component.css']
})
export class PostItemComponent {
  @Input() post!: RedditPost;
}
