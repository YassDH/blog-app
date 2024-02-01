import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { BlogPostWithId } from 'src/app/Models/BlogPostWithId.model';
import { BlogPostsService } from 'src/app/services/blog-posts.service';

@Component({
  selector: 'app-all-posts',
  templateUrl: './all-posts.component.html',
  styleUrls: ['./all-posts.component.css'],
  changeDetection : ChangeDetectionStrategy.OnPush
})
export class AllPostsComponent {

  blogPosts$: Observable<BlogPostWithId[]>;

  postsService : BlogPostsService = inject(BlogPostsService)

  constructor() {
    this.blogPosts$ = this.postsService.loadData();
  }


  deletePost(id : string){
    this.postsService.deleteData(id)
  }

  onFeatured(id: string, state : boolean){
    const featuredData = {
      isFeatured : state
    }

    this.postsService.markFeatured(id, featuredData)
  }


}
