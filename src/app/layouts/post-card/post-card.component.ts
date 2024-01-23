import { Component, Input } from '@angular/core';
import { BlogPostWithId } from 'src/app/Models/BlogPostWithId.model';

@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.css']
})
export class PostCardComponent {
  @Input() postInfo!: BlogPostWithId

}
