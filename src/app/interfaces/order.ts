import { Size } from './size';
import { Topping } from './topping';

export interface Order {
  id: string;
  orderingUserId: string;
  menuId: string;
  size: Size;
  toppings: Topping[];
  quantity: number;
  sum: number;
}
