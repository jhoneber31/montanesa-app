export interface Product {
  id:          string;
  name:        string;
  category:    CategoryName;
  price:       number;
  description: string;
  stock:       number;
  images:      string[];
  slug:        string;
}

interface CategoryName {
  name: string;
}

export type Category = "panes" | "tortas" | "chifones-kekes" | "galletas";

