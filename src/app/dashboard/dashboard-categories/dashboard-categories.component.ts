import { Component, OnInit, inject } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { Category } from 'src/app/Models/Category.model';
import { CategoryWithId } from 'src/app/Models/CategoryWithId.model';
import { CategoriesService } from 'src/app/services/categories.service';

@Component({
  selector: 'app-dashboard-categories',
  templateUrl: './dashboard-categories.component.html',
  styleUrls: ['./dashboard-categories.component.css']
})
export class DashboardCategoriesComponent {


  categories$: Observable<CategoryWithId[]>;
  formCategory:string = ""
  formStatus: string = "Add"
  categoryId: string = ""
  categoryService : CategoriesService = inject(CategoriesService)
  constructor() {
    this.categories$ = this.categoryService.loadData();
  }

  onSubmit(formData : NgForm){
    let categoryData : Category = {
      category : formData.value.category
    }
    if( this.formStatus == "Add"){
      this.categoryService.saveData(categoryData)
      formData.reset();
    }
    else if(this.formStatus == "Edit"){
      this.categoryService.updateData(this.categoryId,categoryData)
      formData.reset();
      this.formStatus = "Add"
      this.categoryId = ""
    }
  }

  onEdit(categoryName : string, id: string){
    this.formCategory = categoryName
    this.formStatus = "Edit"
    this.categoryId=id

  }

  onDelete(id : string){
    this.categoryService.deleteData(id)
  }
}
