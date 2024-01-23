import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { BlogPostWithId } from 'src/app/Models/BlogPostWithId.model';
import { BlogPostsService } from 'src/app/services/blog-posts.service';

@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrls: ['./single-post.component.css']
})
export class SinglePostComponent implements OnInit, OnDestroy{
  blogPostsService : BlogPostsService = inject(BlogPostsService)
  route : ActivatedRoute = inject(ActivatedRoute)
  subscription!: Subscription
  postData$! : Observable<BlogPostWithId>
  similarPosts$! : Observable<BlogPostWithId[]>

  ngOnInit(): void{
    this.subscription = this.route.params.subscribe(val=>{
      this.postData$ = this.blogPostsService.loadOneData(val['id'])
      this.similarPosts$ = this.blogPostsService.loadSimilarPosts(val['categoryId'])
      this.blogPostsService.countViews(val['id'])
    })
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }
}
