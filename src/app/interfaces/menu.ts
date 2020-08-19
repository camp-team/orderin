export interface Menu {
  id: string;
  name: string;
  price: string;
  imageUrl: string;
  description: string;
  restaurantId: string;
  isSoldout: boolean;
  tags: string[];
}
