import { Component, OnInit, ViewChild, ElementRef, OnDestroy, HostListener } from '@angular/core';
import { MenuService } from 'src/app/services/menu.service';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Observable, Subscription } from 'rxjs';
import { startWith, map } from 'rxjs/operators';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { ImageCroppedEvent } from 'ngx-image-cropper';
import { ActivatedRoute, Router } from '@angular/router';
import { MenuGetService } from 'src/app/services/menu-get.service';
import { Menu } from 'src/app/interfaces/menu';

@Component({
  selector: 'app-add-menu',
  templateUrl: './add-menu.component.html',
  styleUrls: ['./add-menu.component.scss']
})
export class AddMenuComponent implements OnInit, OnDestroy {

  form = this.fb.group({
    name: ['', Validators.required],
    description: ['', Validators.required],
    onlyPrice: [0],
    sPrice: [0],
    mPrice: [0],
    lPrice: [0],
    topping1: [''],
    topping1Price: [0],
    topping2: [''],
    topping2Price: [0],
    topping3: [''],
    topping3Price: [0],
    topping4: [''],
    topping4Price: [0],
    topping5: [''],
    topping5Price: [0],
  });

  image: FormControl = new FormControl(null, [Validators.required]);

  imageChangedEvent: any = '';

  croppedImage: any = '';

  tags: string[] = [];

  allTags: string[] = ['Non veg', 'Veg', 'Coolie', 'Drink'];

  filteredTags: Observable<string[]>;

  tagCtrl = new FormControl();

  @ViewChild('tagsInput') tagsInput: ElementRef<HTMLInputElement>;

  restaurantId: string;

  subscription: Subscription;

  isComplete: boolean;

  menuId: string;

  menu: Menu;

  constructor(
    private fb: FormBuilder,
    private menuService: MenuService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private menuGetService: MenuGetService
  ) {
    this.subscription = this.activatedRoute.queryParamMap.subscribe((params) => {
      this.restaurantId = params.get('restaurantId');
      console.log(this.restaurantId);
      this.menuId = params.get('menuId');
      if (this.menuId) {
        console.log(this.menuId);
        this.menuGetService.getMenu(this.restaurantId, this.menuId).subscribe((menu: Menu) => {
          this.menu = menu;
          this.form.patchValue({
            name: menu.name,
            description: menu.description,
            onlyPrice: menu.sizes[0].price,
            sPrice: menu.sizes[1].price,
            mPrice: menu.sizes[2].price,
            lPrice: menu.sizes[3].price,
            topping1: menu.toppings[0].name,
            topping1Price: menu.toppings[0].price,
            topping2: menu.toppings[1].name,
            topping2Price: menu.toppings[1].price,
            topping3: menu.toppings[2].name,
            topping3Price: menu.toppings[2].price,
            topping4: menu.toppings[3].name,
            topping4Price: menu.toppings[4].price,
            topping5: menu.toppings[4].name,
            topping5Price: menu.toppings[4].price,
          });
          this.tags = menu.tags;
        });
      }
    });
  }

  ngOnInit(): void {
    this.filteredTags = this.tagCtrl.valueChanges.pipe(
      startWith(null),
      map((tag: string | null) => tag ? this._filter(tag) : this.allTags.slice()));
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  @HostListener('window:beforeunload', ['$event'])
  unloadNotification($event: any) {
    if (this.form.dirty) {
      $event.preventDefault();
      $event.returnValue = 'Your work will be lost. Is it okay?';
    }
  }

  remove(fruit: string): void {
    const index = this.tags.indexOf(fruit);

    if (index >= 0) {
      this.tags.splice(index, 1);
    }
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    this.tags.push(event.option.viewValue);
    this.tagsInput.nativeElement.value = '';
    this.tagCtrl.setValue(null);
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.allTags.filter(tag => tag.toLowerCase().indexOf(filterValue) === 0);
  }

  fileChangeEvent(event: any): void {
    this.imageChangedEvent = event;
  }
  imageCropped(event: ImageCroppedEvent) {
    this.croppedImage = event.base64;
  }
  imageLoaded() {
    console.log('image is loaded');
  }
  cropperReady() {
    console.log('cropper is ready');
  }
  loadImageFailed() {
    console.log('failed');
  }

  submit() {
    const sum = this.form.value.onlyPrice + this.form.value.sPrice + this.form.value.mPrice + this.form.value.lPrice;
    console.log(this.image.valid);
    if (this.menu && this.form.valid && sum !== 0) {
      console.log('update');
      const setTags = new Set(this.tags);
      const ArrTags = Array.from(setTags);
      this.upload({
        id: this.menu.id,
        name: this.form.value.name,
        imageUrl: this.croppedImage,
        description: this.form.value.description,
        restaurantId: this.restaurantId,
        isSoldout: false,
        sizes: [
          { size: 'Only', price: this.form.value.onlyPrice },
          { size: 'S', price: this.form.value.sPrice },
          { size: 'M', price: this.form.value.mPrice },
          { size: 'L', price: this.form.value.lPrice },
        ],
        toppings: [
          { name: this.form.value.topping1, price: this.form.value.onlyPrice },
          { name: this.form.value.topping2, price: this.form.value.sPrice },
          { name: this.form.value.topping3, price: this.form.value.mPrice },
          { name: this.form.value.topping4, price: this.form.value.lPrice },
          { name: this.form.value.topping5, price: this.form.value.lPrice }
        ],
        tags: ArrTags
      });
    }
    else if (this.form.valid && sum !== 0 && this.image.valid) {
      const setTags = new Set(this.tags);
      const ArrTags = Array.from(setTags);
      this.menuService.addMenu({
        name: this.form.value.name,
        imageUrl: this.croppedImage,
        description: this.form.value.description,
        restaurantId: this.restaurantId,
        isSoldout: false,
        sizes: [
          { size: 'Only', price: this.form.value.onlyPrice },
          { size: 'S', price: this.form.value.sPrice },
          { size: 'M', price: this.form.value.mPrice },
          { size: 'L', price: this.form.value.lPrice },
        ],
        toppings: [
          { name: this.form.value.topping1, price: this.form.value.onlyPrice },
          { name: this.form.value.topping2, price: this.form.value.sPrice },
          { name: this.form.value.topping3, price: this.form.value.mPrice },
          { name: this.form.value.topping4, price: this.form.value.lPrice },
          { name: this.form.value.topping5, price: this.form.value.lPrice }
        ],
        tags: ArrTags
      })
        .then(() => {
          this.isComplete = true;
        })
        .then(() => {
          this.router.navigate(['/develop/restaurant'], { queryParams: { id: this.restaurantId } });
        });
    } else {
      console.log('invalid');
    }
  }

  upload(menu: Menu) {
    this.menuService.updateMenu(menu)
      .then(() => {
        this.isComplete = true;
      })
      .then(() => {
        this.router.navigate(['/develop/restaurant'], { queryParams: { id: this.restaurantId } });
      });
  }

}
