import { Injectable, inject } from '@angular/core';
import { Storage, getDownloadURL, ref, uploadBytes } from '@angular/fire/storage';
import { ToastrService } from 'ngx-toastr';
import { BlogPost } from '../Models/BlogPost.model';
import { Firestore, collection, addDoc, collectionData, doc, docData, updateDoc, deleteDoc, where, limit, increment } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { BlogPostWithId } from '../Models/BlogPostWithId.model';
import { Router } from '@angular/router';
import { orderBy, query } from 'firebase/firestore';

@Injectable({
  providedIn: 'root'
})
export class BlogPostsService {

  constructor() { }

  private readonly storage: Storage = inject(Storage);
  private toastr : ToastrService = inject(ToastrService);
  private firestore : Firestore = inject(Firestore);
  private router : Router = inject(Router)

  addPost(input: any, postData : BlogPost, formStatus : string, id : string) {
    const filePath = `blogPostsImages/${Date.now()}`
    const storageRef = ref(this.storage, filePath);
    uploadBytes(storageRef, input).then(()=>{
      getDownloadURL(storageRef).then((URL)=>{
        postData.postImg = URL       

        if(formStatus == "Edit"){
          this.updateData(id, postData)
        }else{
          this.saveData(postData)    
        }
      }).catch((err)=>{
        console.log(err);
        
        this.toastr.error("An error has occured while getting the image URL !")
      })
    }).catch((err)=>{
      this.toastr.error("An error has occured while uploading the image !")
    })
  }

  saveData(postData : BlogPost){
    let blogPostCollection = collection(this.firestore, 'blogposts')
    addDoc(blogPostCollection, postData).then(
      docRef =>{
        this.toastr.success("Blog Post Added Successfully !")
        this.router.navigate(['/dashboard/posts'])
      }
    ).catch(
      err => {
        console.log(err);
        this.toastr.error("An error has occured while saving the data !")
      }
    )
  }

  loadData(){
    let catCollection = collection(this.firestore, 'blogposts')
    return collectionData(catCollection, { idField: 'id' }) as Observable<BlogPostWithId[]>;
  }

  loadOneData(id:string){
    let catCollection = collection(this.firestore, 'blogposts')
    let docRef = doc(catCollection, id);
    return docData(docRef, { idField: 'id' }) as Observable<BlogPostWithId>
  }

  updateData(id : string, editedData : BlogPost){
    let docReference = doc(this.firestore,'blogposts',id)    
    updateDoc(docReference, {
      ...editedData
    }).then( docRef =>{
      this.toastr.success("Blog Post Updated Successfully !")
      this.router.navigate(['/dashboard/posts'])
    }).catch(
      err => {
        this.toastr.error(err.message)
      }
    )
  }

  deleteData(id : string){
    let docReference = doc(this.firestore,'blogposts',id)
    deleteDoc(docReference).then( docRef =>{
      this.toastr.success("Post Deleted Successfully !")
    }).catch(
      err => {
        this.toastr.error(err.message)
      }
    )
  }

  markFeatured(id : string, featuredData : any){
    let docReference = doc(this.firestore,'blogposts',id)    
    updateDoc(docReference, {
      ...featuredData
    }).then( docRef =>{
      this.toastr.info("Featured status updated !")
    }).catch(
      err => {
        this.toastr.error(err.message)
      }
    )
  }

  getFeaturedPosts(){
    let catCollection = collection(this.firestore, 'blogposts')
    let q = query(catCollection, where('isFeatured', '==', true), limit(4))
    return collectionData(q, { idField: 'id' }) as Observable<BlogPostWithId[]>;
  }

  getLatestPosts(){
    let catCollection = collection(this.firestore, 'blogposts')
    let q = query(catCollection, orderBy('createdAt', 'desc'), limit(6))
    return collectionData(q, { idField: 'id' }) as Observable<BlogPostWithId[]>;
  }

  loadCategoryPosts(categoryId : string){
    let catCollection = collection(this.firestore, 'blogposts')
    let q = query(catCollection, where('category.categoryId', '==', categoryId))
    return collectionData(q, { idField: 'id' }) as Observable<BlogPostWithId[]>;
  }

  loadSimilarPosts(categoryId : string){
    let catCollection = collection(this.firestore, 'blogposts')
    let q = query(catCollection, where('category.categoryId', '==', categoryId), limit(3))
    return collectionData(q, { idField: 'id' }) as Observable<BlogPostWithId[]>;
  }

  countViews(id : string){
    let docReference = doc(this.firestore,'blogposts',id)      
    updateDoc(docReference, {
      views : increment(1) 
    }).then( docRef =>{
      
    })
  }

}
