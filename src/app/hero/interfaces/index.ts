interface SubItem {
  title: string;
}

// Interface for main category items
interface Category {
  title: string;
  subItems: SubItem[];
}

// The type for the array of categories
export type CategoryList = Category[];
