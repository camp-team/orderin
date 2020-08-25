import { Size } from './size';
import { Topping } from './topping';

export interface Order {
  id: string;
  orderingUserId: string;
  menuId: string;
  restaurantId: string;
  size: Size;
  toppings: Topping[];
  quantity: number;
  sum: number;
  isPaid: boolean;
  isComplete: boolean;
}
