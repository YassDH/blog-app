import { ChangeDetectionStrategy, Component, OnDestroy, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Observable, Subscription, map, of } from 'rxjs';
import { BlogPostWithId } from 'src/app/Models/BlogPostWithId.model';
import { BlogPostsService } from 'src/app/services/blog-posts.service';

@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrls: ['./single-post.component.css'],
  changeDetection : ChangeDetectionStrategy.OnPush
})
export class SinglePostComponent implements OnInit, OnDestroy{
  router : Router = inject(Router)
  blogPostsService : BlogPostsService = inject(BlogPostsService)
  route : ActivatedRoute = inject(ActivatedRoute)
  subscription!: Subscription
  postData$! : Observable<BlogPostWithId | null>
  similarPosts$ : Observable<BlogPostWithId[] | null> = of(null)

  ngOnInit(): void{
    this.postData$ = this.route.data.pipe(map((data)=>{
      return data['postData']
    }))


    this.subscription = this.route.params.subscribe(val=>{
      const postLink = val['postLink']

    //   this.postData$ = this.blogPostsService.loadDataWithPostLink(postLink).pipe(
    //     map((value)=>{
    //       if(!value){
    //         this.router.navigate(['/error'])
    //         return null
    //       }else{
    //         return value
    //       }
    //     })
    //   )

      this.subscription = this.blogPostsService.loadDataWithPostLink(postLink).subscribe(
        (value)=>{
          if(!value){
            this.router.navigate(['/error'])
          }else{
            this.similarPosts$ = this.blogPostsService.loadSimilarPosts(value.category.categoryId)
          }
        }
      )

      // this.postData$ = this.blogPostsService.loadOneData(val['id'])
      // this.similarPosts$ = this.blogPostsService.loadSimilarPosts(val['categoryId'])
      // this.blogPostsService.countViews(val['id'])
      
    })
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }
}