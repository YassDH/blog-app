import { Injectable, inject } from '@angular/core';
import { Firestore, collection, addDoc, collectionData, deleteDoc, doc, docData, where } from '@angular/fire/firestore';
import { ToastrService } from 'ngx-toastr';
import { Subscriber } from '../Models/Subscriber.model';
import { Observable } from 'rxjs';
import { SubscriberWithId } from '../Models/SubscriberWithId.model';
import { limit, query } from 'firebase/firestore';

@Injectable({
  providedIn: 'root'
})
export class SubscribersService {
  
  constructor() { }

  private firestore : Firestore = inject(Firestore)
  private toastr : ToastrService = inject(ToastrService)


  saveData(subData : Subscriber){
    let subCollection = collection(this.firestore, 'subscribers')
    addDoc(subCollection, subData).then(
      docRef =>{
        this.toastr.success("Subscribed Successfully !")
      }
    ).catch(
      err => {
        this.toastr.error(err.message)
      }
    )
  }

  checkSubs(email : string){
    let subCollection = collection(this.firestore, 'subscribers')
    let q = query(subCollection, where('email', '==', email) )
    return collectionData(q, { idField: 'id' }) as Observable<SubscriberWithId[]>;
  }

  loadData(){
    let subCollection = collection(this.firestore, 'subscribers')
    return collectionData(subCollection, { idField: 'id' }) as Observable<SubscriberWithId[]>;
  }

  deleteData(id : string){
    let subCollection = doc(this.firestore,'subscribers',id)
    deleteDoc(subCollection).then( docRef =>{
      this.toastr.success("Subscriber Deleted Successfully !")
    }).catch(
      err => {
        this.toastr.error(err.message)
      }
    )
  }
}
