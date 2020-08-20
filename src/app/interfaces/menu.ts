import { Size } from './size';

export interface Menu {
  id: string;
  name: string;
  imageUrl: string;
  description: string;
  restaurantId: string;
  isSoldout: boolean;
  sizes: Size[];
  tags: string[];
}
