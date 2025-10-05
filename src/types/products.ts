export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  category: 'pack' | 'vetement' | 'accessoire';
  ageGroup: 'adulte' | 'junior' | 'tous';
  image: string;
  colors?: string[];
}
