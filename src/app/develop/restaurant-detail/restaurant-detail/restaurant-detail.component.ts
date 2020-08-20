import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RestaurantGetService } from 'src/app/services/restaurant-get.service';
import { Restaurant } from 'src/app/interfaces/restaurant';
import { Location } from '@angular/common';
import { Observable } from 'rxjs';
import { Menu } from 'src/app/interfaces/menu';
import { MenuGetService } from 'src/app/services/menu-get.service';
import {MatDialog} from '@angular/material/dialog';
import { MenuDialogComponent } from '../menu-dialog/menu-dialog.component';

@Component({
  selector: 'app-restaurant-detail',
  templateUrl: './restaurant-detail.component.html',
  styleUrls: ['./restaurant-detail.component.scss']
})
export class RestaurantDetailComponent implements OnInit {

  restaurant: Observable<Restaurant>;

  menus: Observable<Menu[]>;

  constructor(
    private activatedRoute: ActivatedRoute,
    private restaurantGetService: RestaurantGetService,
    private location: Location,
    private menuGetServiece: MenuGetService,
    private dialog: MatDialog
  ) {
    this.activatedRoute.queryParamMap.subscribe((params) => {
      const id = params.get('id');
      this.restaurant = this.restaurantGetService.getRestaurant(id);
      this.menus = this.menuGetServiece.getMenus(id);
    });
  }

  ngOnInit(): void {
  }

  navigateBack() {
    this.location.back();
  }

  openDialog(menu: Menu) {
    const dialogRef = this.dialog.open(MenuDialogComponent, {
      data: menu
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}
