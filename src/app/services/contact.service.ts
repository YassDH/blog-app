import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ContactForm } from '../Models/ContactForm.model';
import { Observable, catchError, map, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  private link : string = "https://api.web3forms.com/submit"

  http : HttpClient = inject(HttpClient)


  sendMessage(input : ContactForm) : Observable<string>{
    return this.http.post(this.link, input).pipe(
      map(
        (response : any)=>{
          return response.message
        }
      ),
      catchError((error: any) => {
        console.error('An error occurred:', error);
        return throwError(()=> new Error('Something went wrong. Please try again later.'));
      })
    )

  }
}
