
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss'],
})
export class CommentsComponent implements OnInit {

  @Input() Comments!: Comment[] ;
  @Output() newComment = new EventEmitter<string>();
comment: any;

commentCtrl!: FormControl;


  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
this.commentCtrl = this.formBuilder.control('', [Validators.required, Validators.minLength(10)])
  }

  onLeaveComment() {
    if (this.commentCtrl.invalid) {
      return;
    }
this.newComment.emit(this.commentCtrl.value);
this.commentCtrl.reset()
  }
}


