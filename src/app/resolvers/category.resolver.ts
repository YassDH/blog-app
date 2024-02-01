import { ResolveFn } from '@angular/router';
import { Observable } from 'rxjs';
import { BlogPostWithId } from '../Models/BlogPostWithId.model';
import { inject } from '@angular/core';
import { BlogPostsService } from '../services/blog-posts.service';

export const categoryResolver: ResolveFn<Observable<BlogPostWithId[]>> = (route, state) => {
    const blogPostsService : BlogPostsService = inject(BlogPostsService)
    const categoryId = route.params['id'];
    return blogPostsService.loadCategoryPosts(categoryId);
};
