
import { Component, OnInit } from '@angular/core';
import { Post } from './posts.model';
import { PathLocationStrategy } from '@angular/common';
import { PostService } from '../services/post.service';

@Component({
  selector: 'posts',
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.css'
})
export class PostsComponent implements OnInit {
  posts:[any] = [{}];
  error: any;
  

  constructor(private postService: PostService) {  }

  ngOnInit() : void {
    this.postService.getPosts()
    .subscribe((res) => {
      this.posts = <[any]>res;
    },error => this.error = error)
  }

  createPost(input:HTMLInputElement) {
    const post:Post = {title: input.value};
    input.value = ''

    this.postService.createPost(post)
    .subscribe((res: {id?:string}) => {
      post.id = res.id;
      this.posts.splice(0,0,post)
      console.log(res);
    })
  }

  updatePost( post: Post) {
    post.title = 'updated'
    this.postService.updatePost(post)
    // this.http.patch(this.url+'/'+post.id, JSON.stringify({
    //   title: 'updated'
    // }))
    .subscribe( res => {
      console.log(res);
    })
  }

  deletePost( post:Post ) {
    this.postService.deletePost(post)
    .subscribe(res => {
      console.log(res);
      let index = this.posts.indexOf(post)
      this.posts.splice(index,1)
    },
    error => this.error = error)
  }

}
