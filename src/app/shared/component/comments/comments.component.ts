
import { Component, Input, OnInit } from '@angular/core';
import { comment } from '../../../core/models/comment.model';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss'],
})
export class CommentsComponent implements OnInit {
  @Input() Comments!: Comment[] ;
comment: any;

  constructor() {}

  ngOnInit(): void {}
}
