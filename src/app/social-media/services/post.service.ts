import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Post } from "../models/post.model";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/assets/environments/environment.prod";

@Injectable()
export class PostsService {
  constructor(private http : HttpClient) {}

  getPosts(): Observable<Post[]> {
    // return this.http.get<Post[]>('http://localhost:3000/posts');
    return this.http.get<Post[]>(`${environment.apiUrl}/posts`);
  }

  addNewComment(postCommented: { comment: string, postId: number }) {
    console.log(postCommented)

  }
}