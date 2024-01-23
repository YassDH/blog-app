import { Component, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { CategoryWithId } from 'src/app/Models/CategoryWithId.model';
import { CategoriesService } from 'src/app/services/categories.service';

@Component({
  selector: 'app-category-navbar',
  templateUrl: './category-navbar.component.html',
  styleUrls: ['./category-navbar.component.css']
})
export class CategoryNavbarComponent {
  private categoryService : CategoriesService = inject(CategoriesService)

  categories$ : Observable<CategoryWithId[]> = this.categoryService.loadData()
}
