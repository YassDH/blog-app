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
export class SinglePostComponent implements OnInit{
  router : Router = inject(Router)
  blogPostsService : BlogPostsService = inject(BlogPostsService)
  route : ActivatedRoute = inject(ActivatedRoute)
  subscription!: Subscription
  postData$! : Observable<Observable<BlogPostWithId> | null>
  similarPosts$ : Observable<Observable<BlogPostWithId[]> | null> = of(null)

  ngOnInit(): void{
    this.postData$ = this.route.data.pipe(map((data)=>{
      return data['postData']
    }))
    this.similarPosts$ = this.route.data.pipe(map((data)=>{
      return data['similarPosts']
    }))
  }


}