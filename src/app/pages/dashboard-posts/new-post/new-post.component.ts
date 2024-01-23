import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { CategoryWithId } from 'src/app/Models/CategoryWithId.model';
import { CategoriesService } from 'src/app/services/categories.service';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css']
})
export class NewPostComponent {

  postTitle : string = ""
  imgSrc : any = "./assets/image-placeholder.png"
  selectedImage : any
  postForm!: FormGroup;

  categoryService : CategoriesService = inject(CategoriesService)
  categories$ : Observable<CategoryWithId[]> = this.categoryService.loadData()
  formBuilder : FormBuilder = inject(FormBuilder)

  constructor(){
    this.postForm = this.formBuilder.group({
      title: ['', [Validators.required, Validators.minLength(10)]],
      postLink: ['', Validators.required],
      excerpt: ['', [Validators.required, Validators.minLength(50)]],
      category: ['', Validators.required],
      postImg: ['', Validators.required],
      content: ['', Validators.required]
    })
  }


  onTitleChanged($event : any){
    this.postTitle = $event.target.value
  }

  get formControl(){
    return this.postForm.controls
  }

  showPreview($event : any){
    const reader = new FileReader()
    reader.onload = (e)=>{
      this.imgSrc = e.target?.result
    }
    reader.readAsDataURL($event.target.files[0])
    this.selectedImage = $event.target.files[0]
  }
}
