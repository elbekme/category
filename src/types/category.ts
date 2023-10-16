export interface CategoryType {
  id: string;
  name: string;
  image: string;
  editCategory:(id:string) => void;
  deleteCategory:(id:string) => void;
}

export interface CategoryResponseType extends CategoryType {
  createdAt: string;
}
