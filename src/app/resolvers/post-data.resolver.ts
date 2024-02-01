import { ResolveFn, Router } from '@angular/router';
import { Observable, catchError, of } from 'rxjs';
import { BlogPostWithId } from '../Models/BlogPostWithId.model';
import { BlogPostsService } from '../services/blog-posts.service';
import { inject } from '@angular/core';

export const postDataResolver: ResolveFn<Observable<BlogPostWithId | null>> = (route, state) => {

  const router: Router = inject(Router)
  const blogPostsService: BlogPostsService = inject(BlogPostsService)
  const postId = route.params['id'];
  blogPostsService.countViews(postId) // ADD 1 VIEW TO THE POST WITH THE ID PASSED IN THE PARAMS
  return blogPostsService.loadOneData(postId).pipe(
    catchError(() => {
      router.navigate(['/error']);
      return of(null);
    })
  );
};
