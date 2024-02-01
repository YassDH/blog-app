import { ResolveFn, Router } from '@angular/router';
import { Observable, catchError, map, of } from 'rxjs';
import { BlogPostWithId } from '../Models/BlogPostWithId.model';
import { BlogPostsService } from '../services/blog-posts.service';
import { inject } from '@angular/core';

export const postDataResolver: ResolveFn<Observable<BlogPostWithId | null>> = (route, state) => {

  const router: Router = inject(Router)
  const blogPostsService: BlogPostsService = inject(BlogPostsService)
  const postLink = route.params['postLink'];
  
  return blogPostsService.loadDataWithPostLink(postLink).pipe(
    map((value)=>{
      if(!value){
        router.navigate(['/error'])
        return null
      }else{
        blogPostsService.countViews(value.id) 
        return value
      }
    })
  )
};
