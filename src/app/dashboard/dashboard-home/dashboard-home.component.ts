import { Component, inject } from '@angular/core';
import { Observable, map } from 'rxjs';
import { BlogPostsService } from 'src/app/services/blog-posts.service';
import { CategoriesService } from 'src/app/services/categories.service';
import { CommentsService } from 'src/app/services/comments.service';
import { SubscribersService } from 'src/app/services/subscribers.service';

@Component({
  selector: 'app-dashboard-home',
  templateUrl: './dashboard-home.component.html',
  styleUrls: ['./dashboard-home.component.css']
})
export class DashboardHomeComponent {

  postsCount$: Observable<number>;
  commentsCount$: Observable<number>;
  categoriesCount$: Observable<number>;
  subCount$: Observable<number>;

  postsService  = inject(BlogPostsService)
  commentsService = inject(CommentsService)
  categoriesService = inject(CategoriesService)
  subService = inject(SubscribersService)

  constructor() {
    this.postsCount$ = this.postsService.loadData().pipe(map( data=>data.length ));
    this.commentsCount$ = this.commentsService.loadAllData().pipe(map( data=>data.length ));
    this.categoriesCount$ = this.categoriesService.loadData().pipe(map( data=>data.length ));
    this.subCount$ = this.subService.loadData().pipe(map( data=>data.length ));
    
  }

}


