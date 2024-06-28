import { Component, OnInit, Input } from '@angular/core';
import { Observable, Subscribable } from 'rxjs';
import { Post } from 'src/app/social-media/models/post.model';


@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss'],
})
export class PostListItemComponent implements OnInit {
  @Input() post!: Post;
posts$: Observable<undefined> | Subscribable<undefined> | Promise<undefined> | undefined;

  constructor() {}

  ngOnInit(): void {}
}
