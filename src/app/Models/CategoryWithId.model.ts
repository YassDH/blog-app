import { Category } from "./Category.model";

export interface CategoryWithId extends Category {
    id: string;
}