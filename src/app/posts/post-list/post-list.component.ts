import { PostsService } from './../posts.service';
 import { Component, Input, OnDestroy, OnInit,} from '@angular/core';
import { Post } from '../post.module';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss'],
})
export class PostListComponent implements OnInit, OnDestroy {
  //  posts = [
  //   {title: 'First Post', content: 'This is the first post\'s content'},
  //   {title: 'Second Post', content: 'This is the second post\'s content'},
  //   {title: 'Third Post', content: 'This is the third post\'s content'},
  //   {title: 'Fourth Post', content: 'This is the fourth post\'s content'}
  //  ]

  // @Input() posts: Post[] = [];
  posts: Post[] = [];
  private postsSub: Subscription = new Subscription;

  constructor(public postsService: PostsService) {}

  ngOnInit(): void {
    this.posts = this.postsService.getPosts();
    this.postsSub = this.postsService
      .getPostUpdateListener()
      .subscribe((posts: Post[]) => {
        this.posts = posts;
      });
  }

  ngOnDestroy(): void {
    // remove subscription and prevent memory lick
    this.postsSub.unsubscribe();
    throw new Error('Method not implemented.');
  }
}
