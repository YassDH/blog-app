import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { CommentWithId } from 'src/app/Models/CommentWithId.model';
import { CommentsService } from 'src/app/services/comments.service';

@Component({
  selector: 'app-dashboard-comments',
  templateUrl: './dashboard-comments.component.html',
  styleUrls: ['./dashboard-comments.component.css'],
  changeDetection : ChangeDetectionStrategy.OnPush
})
export class DashboardCommentsComponent {

  commentsService : CommentsService = inject(CommentsService)

  notApprovedComments$ : Observable<CommentWithId[]> = this.commentsService.loadNotApprovedComments()

  deleteComment(commentId : string){
    this.commentsService.deleteData(commentId)
  }

  approveComment(commentId : string){
    this.commentsService.approveComment(commentId)
  }

}
