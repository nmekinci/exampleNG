import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Post } from './posts.model';

@Component({
  selector: 'posts',
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.css'
})
export class PostsComponent {
  posts:[any] = [{}];
  private url:string = 'https://jsonplaceholder.typicode.com/posts'

  constructor(private http: HttpClient) {
    http.get(this.url)
    .subscribe(res => {
      this.posts = <[any]>res;
    } )
  }

  createPost(input:HTMLInputElement) {
    const post:Post = {title: input.value};
    input.value = ''
    this.http.post(this.url, JSON.stringify(post))
    .subscribe((res: {id?:string}) => {
      post.id = res.id;
      this.posts.splice(0,0,post)
      console.log(res);
    })
  }

}
