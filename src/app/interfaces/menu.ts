import { Size } from './size';
import { Topping } from './topping';

export interface Menu {
  id: string;
  name: string;
  imageUrl: string;
  description: string;
  restaurantId: string;
  isSoldout: boolean;
  sizes: Size[];
  toppings: Topping[];
  tags: string[];
}
