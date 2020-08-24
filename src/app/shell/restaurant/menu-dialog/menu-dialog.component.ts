import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Menu } from 'src/app/interfaces/menu';
import { FormBuilder } from '@angular/forms';
import { Size } from 'src/app/interfaces/size';
import { Topping } from 'src/app/interfaces/topping';
import { AuthService } from 'src/app/services/auth.service';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-menu-dialog',
  templateUrl: './menu-dialog.component.html',
  styleUrls: ['./menu-dialog.component.scss']
})
export class MenuDialogComponent implements OnInit {

  user = this.authService.user;

  availableSizes: Size[] = [];

  chosenSize: Size;

  toppings = [];

  selectedToppings = [];

  form = this.fb.group({
    quantity: [0]
  });

  sum = 0;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: Menu,
    public dialogRef: MatDialogRef<MenuDialogComponent>,
    private fb: FormBuilder,
    private authService: AuthService,
    private orderService: OrderService,
  ) {
    data.sizes.map((size) => {
      if (size.price !== 0) {
        this.availableSizes.push(size);
      }
    });
    data.toppings.map((topping: Topping) => {
      this.toppings.push(
        {
          name: topping.name,
          price: topping.price,
          selected: false
        }
      );
    });
    console.log(this.toppings);
  }

  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  increment() {
    this.form.setValue({
      quantity: this.form.get('quantity').value + 1
    });
    this.calculate();
  }

  decrement() {
    if (this.form.value.quantity > 0) {
      this.form.setValue({
        quantity: this.form.get('quantity').value - 1
      });
      this.calculate()
    }
  }

  calculate() {
    this.selectedToppings = [];
    this.toppings.map((topping) => {
      if (topping.selected) {
        this.selectedToppings.push({ name: topping.name, price: topping.price });
      }
    });
    let toppingsSum = 0;
    this.selectedToppings.map(selectedTopping => {
      toppingsSum += selectedTopping.price;
    });
    this.sum = (this.chosenSize.price + toppingsSum) * this.form.value.quantity;
    console.log(this.sum);
  }

  order() {
    if (this.chosenSize) {
      this.calculate();
      this.orderService.order({
        orderingUserId: this.user.uid,
        menuId: this.data.id,
        size: this.chosenSize,
        toppings: this.selectedToppings,
        quantity: this.form.value.quantity,
        sum: this.sum
      });
      this.dialogRef.close();
    }
  }

}
