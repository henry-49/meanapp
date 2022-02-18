import { Component } from '@angular/core';
import { Post } from './posts/post.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  storedPosts: Post[] = [];

  onPostAdded(post: any) {
    this.storedPosts.push(post);
  }
}
