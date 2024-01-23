import { Injectable, inject } from '@angular/core';
import { Firestore, collection, addDoc, collectionData, deleteDoc, doc, docData, where, query, updateDoc } from '@angular/fire/firestore';
import { ToastrService } from 'ngx-toastr';
import { Comment } from '../Models/Comment.model';
import { CommentWithId } from '../Models/CommentWithId.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  private firestore : Firestore = inject(Firestore)
  private toastr : ToastrService = inject(ToastrService)

  constructor() { }

  saveData(commentData : Comment){
    let commCollection = collection(this.firestore, 'comments')
    addDoc(commCollection, commentData).then(
      docRef =>{
        this.toastr.success("Comment Submitted for verification !")
      }
    ).catch(
      err => {
        this.toastr.error("An error has occured please try again !")
      }
    )
  }

  loadData(postId : string){
    let commCollection = collection(this.firestore, 'comments')
    let q = query(commCollection, 
      where('postId', '==', postId),
      where('approved', '==', true)
      )
    return collectionData(q, { idField: 'id' }) as Observable<CommentWithId[]>;
  }

  loadNotApprovedComments(){
    let commCollection = collection(this.firestore, 'comments')
    let q = query(commCollection,
      where('approved', '==', false)
      )
    return collectionData(q, { idField: 'id' }) as Observable<CommentWithId[]>;
  }

  deleteData(id : string){
    let docReference = doc(this.firestore,'comments',id)
    deleteDoc(docReference).then( docRef =>{
      this.toastr.success("Comment Deleted Successfully !")
    }).catch(
      err => {
        this.toastr.error(err.message)
      }
    )
  }

  approveComment(id: string){
    let docReference = doc(this.firestore, 'comments', id)    
    updateDoc(docReference, {
      approved : true
    }).then( docRef =>{
      this.toastr.info("Comment approved !")
    }).catch(
      err => {
        this.toastr.error(err.message)
      }
    )
  }
}
