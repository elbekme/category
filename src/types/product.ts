export interface ProductType {
    id: string;
    name: string;
    image: string;
    description: string;
    discount: number;
    price: string;
    editCategory:(id:string) => void;
    deleteCategory:(id:string) => void;
  }
  
  export interface ProductResponseType extends ProductType {
    createdAt: string;
  }
  