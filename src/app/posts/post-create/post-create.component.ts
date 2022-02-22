import { PostsService } from './../posts.service';
import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Post } from '../post.module';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.scss'],
})
export class PostCreateComponent implements OnInit {
  enteredTitle = '';
  enteredContent = '';
  // eventEmitter always have to @Output declearator
  // @Output() postCreated = new EventEmitter<Post>();
  newPost: string = 'NO CONTENT';
  postTitleError: string = "Please enter a post title";
  postContentError: string = "Post content can't be empty";

  constructor(public postsService: PostsService) {}

// on the form their is a value property
  onAddPost(form: NgForm) {
    // error handle
    if(form.invalid) return;
    this.postsService.addPost(form.value.title, form.value.content);
    // const post: Post = {
    //   title: form.value.title,
    //   content: form.value.content,
    // };
    // this.postCreated.emit(post);
  }

  // get value upon a click
  // addPost(postInput: HTMLTextAreaElement) {
  //   // console.log(postInput);
  //   // console.dir(postInput);
  //   this.newPost = postInput.value;
  //   // this.newPost = 'Ths user\'s post';
  // }

  ngOnInit(): void {}
}
