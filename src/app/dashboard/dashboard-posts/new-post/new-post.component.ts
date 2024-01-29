import { Component, OnDestroy, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable, Subscription } from 'rxjs';
import { CategoryWithId } from 'src/app/Models/CategoryWithId.model';
import { BlogPost } from 'src/app/Models/BlogPost.model';
import { CategoriesService } from 'src/app/services/categories.service';
import { BlogPostsService } from 'src/app/services/blog-posts.service';
import { ActivatedRoute } from '@angular/router';
import { BlogPostWithId } from 'src/app/Models/BlogPostWithId.model';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css']
})
export class NewPostComponent implements OnDestroy {

  postTitle : string = ""
  imgSrc : any = "./assets/image-placeholder.png"
  selectedImage : any
  postForm!: FormGroup;
  loadedPost! : BlogPostWithId 
  formStatus : string = "New"
  docId : string =""

  categoryService : CategoriesService = inject(CategoriesService)
  blogPostService : BlogPostsService = inject(BlogPostsService)
  categories$ : Observable<CategoryWithId[]> = this.categoryService.loadData()
  formBuilder : FormBuilder = inject(FormBuilder)
  route : ActivatedRoute = inject(ActivatedRoute)
  observerReference : Subscription

  constructor(){
    this.observerReference = this.route.queryParams.subscribe(value=>{
      if(value['id']){
        this.blogPostService.loadOneData(value['id']).subscribe((post)=>{
          this.loadedPost = post

          this.postForm = this.formBuilder.group({
            title: [this.loadedPost.title, [Validators.required, Validators.minLength(10)]],
            postLink: [{ value: this.loadedPost.postLink, disabled: true }, Validators.required],
            excerpt: [this.loadedPost.excerpt, [Validators.required, Validators.minLength(50)]],
            category: [`${this.loadedPost.category.categoryId}-${this.loadedPost.category.category}`, Validators.required],
            postImg: ['', Validators.required],
            content: [this.loadedPost.content, Validators.required]
          })

          this.imgSrc = this.loadedPost.postImg
          this.formStatus = "Edit"
          this.docId = this.loadedPost.id
          
        })
      }else{
        this.postForm = this.formBuilder.group({
          title: ['', [Validators.required, Validators.minLength(10)]],
          postLink: [{ value: '', disabled: true }, Validators.required],
          excerpt: ['', [Validators.required, Validators.minLength(50)]],
          category: ['', Validators.required],
          postImg: ['', Validators.required],
          content: ['', Validators.required]
        })
      }
    })

  }

  ngOnDestroy(): void {
    this.observerReference.unsubscribe()
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

  transform(value: string): string {
    return value.trim() == "" ? "--" : value.replace(/\s/g,'-');
  }

  onSumbit(){
    
    let [categoryId, category] = this.postForm.value.category.split('-');

    const postData : BlogPost ={
      title : this.postForm.value.title,
      postLink : this.transform(this.postForm.value.title),
      category : {
        categoryId : categoryId,
        category : category
      },
      postImg : '',
      excerpt : this.postForm.value.excerpt,
      content : this.postForm.value.content,
      isFeatured : false,
      views : 0,
      status : 'new',
      createdAt : new Date()
    }

    this.blogPostService.addPost(this.selectedImage, postData, this.formStatus, this.docId)
   
    this.postForm.reset()
    this.imgSrc = "./assets/image-placeholder.png"
  }

  
  canDeactivate(){
    let empty = true;
    let values = Object.values(this.postForm.value);
  
    for (const value of values) {
      if (value) {
        empty = false;
        break;
      }
    }
    if (!empty) {
      return window.confirm('You have unsaved changes. Do you really want to leave?');
    }
    return true;
  }
}
