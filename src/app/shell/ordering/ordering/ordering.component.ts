import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { OrderGetService } from 'src/app/services/order-get.service';
import { OrderService } from 'src/app/services/order.service';
import { Order } from 'src/app/interfaces/order';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-ordering',
  templateUrl: './ordering.component.html',
  styleUrls: ['./ordering.component.scss']
})
export class OrderingComponent implements OnInit {

  cart: Observable<Order[]>;

  constructor(
    private authService: AuthService,
    private orderingGetService: OrderGetService,
    private orderService: OrderService
  ) {
    this.cart = this.orderingGetService.getCart(this.authService.user.uid);
  }

  ngOnInit(): void {
  }

  cancelOrder(id: string) {
    this.orderService.cancelOrder(id);
  }

}
