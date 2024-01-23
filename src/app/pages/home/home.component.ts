import { Component, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { BlogPostWithId } from 'src/app/Models/BlogPostWithId.model';
import { BlogPostsService } from 'src/app/services/blog-posts.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  blogPostsService : BlogPostsService = inject(BlogPostsService)

  featuredPosts$ : Observable<BlogPostWithId[]> = this.blogPostsService.getFeaturedPosts()

}
