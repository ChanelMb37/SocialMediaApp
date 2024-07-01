import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Observable, Subscribable } from 'rxjs';
import { Post } from 'src/app/social-media/models/post.model';


@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss'],
})
export class PostListItemComponent implements OnInit {
  
  @Input() post!: Post;
  @Output() postCommented = new EventEmitter<{ comment: string, postId: number }>();
  posts$:
    | Observable<undefined>
    | Subscribable<undefined>
    | Promise<undefined>
    | undefined;

  constructor() {}

  ngOnInit(): void {}

  onNewComment(comment: string) {
    this.postCommented.emit({ comment, postId: this.post.id });
  }
}

