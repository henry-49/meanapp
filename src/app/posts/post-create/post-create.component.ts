import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { Post } from '../post.module';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.scss'],
})
export class PostCreateComponent implements OnInit{
  enteredTitle = "";
  enteredContent = "";
  // eventEmitter always have to @Output declearator
  @Output() postCreated = new EventEmitter<Post>();
  newPost: string = 'NO CONTENT';

  constructor() {}

  onAddPost() {
    const post: Post = {
      title: this.enteredTitle,
      content: this.enteredContent,
    };
      this.postCreated.emit(post);

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
