import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { User } from 'src/app/interfaces/user';
import { OrderGetService } from 'src/app/services/order-get.service';
import { Observable } from 'rxjs';
import { Order } from 'src/app/interfaces/order';

@Component({
  selector: 'app-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss']
})
export class ShellComponent implements OnInit {

  user$ = this.authService.user$;

  cart: Order;

  constructor(
    private authService: AuthService,
    private orderGetService: OrderGetService
  ) {
    this.user$.subscribe((user: User) => {
      this.orderGetService.getCart(user.uid).subscribe((cart: Order[]) => {
        this.cart = cart[0];
      });
    });
  }

  ngOnInit(): void { }

}
