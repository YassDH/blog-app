import { Injectable, inject } from '@angular/core';
import { Firestore, collection, addDoc, collectionData, deleteDoc } from '@angular/fire/firestore';
import { Category } from '../Models/Category.model';
import { ToastrService } from 'ngx-toastr';
import { Observable, map, of } from 'rxjs';
import { CategoryWithId } from '../Models/CategoryWithId.model';
import { doc, updateDoc } from 'firebase/firestore';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor() { }

  private firestore : Firestore = inject(Firestore)
  private toastr : ToastrService = inject(ToastrService)

  saveData(categoryData : Category){
    let catCollection = collection(this.firestore, 'categories')
    addDoc(catCollection, categoryData).then(
      docRef =>{
        this.toastr.success("Category Added Successfully !")
      }
    ).catch(
      err => {
        this.toastr.error(err.message)
      }
    )
  }

  loadData(){
    let catCollection = collection(this.firestore, 'categories')
    return collectionData(catCollection, { idField: 'id' }) as Observable<CategoryWithId[]>;
  }

  updateData(id : string, editedData : Category){
    let docReference = doc(this.firestore,'categories',id)
    updateDoc(docReference, {
      category : editedData.category
    }).then( docRef =>{
      this.toastr.success("Category Updated Successfully !")
    }).catch(
      err => {
        this.toastr.error(err.message)
      }
    )
  }

  deleteData(id : string){
    let docReference = doc(this.firestore,'categories',id)
    deleteDoc(docReference).then( docRef =>{
      this.toastr.success("Category Deleted Successfully !")
    }).catch(
      err => {
        this.toastr.error(err.message)
      }
    )
  }
}
