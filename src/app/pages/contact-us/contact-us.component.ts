import { Component, inject } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { ContactForm } from 'src/app/Models/ContactForm.model';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent {

  private contactService : ContactService = inject(ContactService)
  response !:Observable<string>

  onSubmit(data : NgForm) {
    const dataToSend : ContactForm= {
      name : data.value.name,
      email : data.value.email,
      message : data.value.message,
      subject : data.value.subject,
      access_key : "6d128682-0006-4705-92a2-c0cd285f5fac"
    }

    this.response = this.contactService.sendMessage(dataToSend)

    data.reset()


  }
}
