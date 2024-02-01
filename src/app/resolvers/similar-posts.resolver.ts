import { ResolveFn, Router } from '@angular/router';
import { Observable, catchError, of } from 'rxjs';
import { BlogPostWithId } from '../Models/BlogPostWithId.model';
import { BlogPostsService } from '../services/blog-posts.service';
import { inject } from '@angular/core';

export const similarPostsResolver: ResolveFn<Observable<BlogPostWithId[] | null>> = (route, state) => {
  const router: Router = inject(Router)
  const blogPostsService: BlogPostsService = inject(BlogPostsService)
  const categoryId = route.params['categoryId'];
  return blogPostsService.loadSimilarPosts(categoryId).pipe(
      catchError(() => {
        router.navigate(['/error']);
        return of(null);
      })      
  );
};
