import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subscribable, Subscription } from 'rxjs';
import { BlogPostWithId } from 'src/app/Models/BlogPostWithId.model';
import { CategoryWithId } from 'src/app/Models/CategoryWithId.model';
import { BlogPostsService } from 'src/app/services/blog-posts.service';

@Component({
  selector: 'app-single-category',
  templateUrl: './single-category.component.html',
  styleUrls: ['./single-category.component.css']
})
export class SingleCategoryComponent implements OnInit, OnDestroy{

  route : ActivatedRoute = inject(ActivatedRoute)
  blogPostsService : BlogPostsService = inject(BlogPostsService)
  categoryPosts$!: Observable<BlogPostWithId[]>
  categoryData : string | null = null
  subscription!: Subscription

  ngOnInit(): void {
    this.subscription = this.route.params.subscribe(val=>{
      this.categoryData = val['category']
      this.categoryPosts$ = this.blogPostsService.loadCategoryPosts(val['id'])
    })
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }
  
}
