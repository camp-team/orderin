import { Component, OnInit, ViewChild, ElementRef, OnDestroy } from '@angular/core';
import { MenuService } from 'src/app/services/menu.service';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Observable, Subscription } from 'rxjs';
import { startWith, map } from 'rxjs/operators';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { ImageCroppedEvent } from 'ngx-image-cropper';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-menu',
  templateUrl: './add-menu.component.html',
  styleUrls: ['./add-menu.component.scss']
})
export class AddMenuComponent implements OnInit, OnDestroy {

  form = this.fb.group({
    name: ['', Validators.required],
    image: [null, Validators.required],
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

  imageChangedEvent: any = '';

  croppedImage: any = '';

  tags: string[] = [];

  allTags: string[] = ['Non veg', 'Veg', 'Coolie', 'Drink'];

  filteredTags: Observable<string[]>;

  tagCtrl = new FormControl();

  @ViewChild('tagsInput') tagsInput: ElementRef<HTMLInputElement>;

  restaurantId: string;

  subscription: Subscription;

  constructor(
    private fb: FormBuilder,
    private menuService: MenuService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {
    this.subscription = this.activatedRoute.queryParamMap.subscribe((params) => {
      this.restaurantId = params.get('restaurantId');
      console.log(this.restaurantId);
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
    if (this.form.valid && sum !== 0) {
      const setTags = new Set(this.tags);
      const ArrTags = Array.from(setTags);
      console.log(this.form.value);
      console.log(this.restaurantId);
      console.log(ArrTags);
      this.menuService.addMenu({
        name: this.form.value.name,
        imageUrl: this.croppedImage,
        description: this.form.value.description,
        restaurantId: this.restaurantId,
        isSoldout: false,
        sizes: [
          {size: 'Only', price: this.form.value.onlyPrice},
          {size: 'S', price: this.form.value.sPrice},
          {size: 'M', price: this.form.value.mPrice},
          {size: 'L', price: this.form.value.lPrice},
        ],
        toppings: [
          {name: this.form.value.topping1, price: this.form.value.onlyPrice},
          {name: this.form.value.topping2, price: this.form.value.sPrice},
          {name: this.form.value.topping3, price: this.form.value.mPrice},
          {name: this.form.value.topping4, price: this.form.value.lPrice},
          {name: this.form.value.topping5, price: this.form.value.lPrice}
        ],
        tags: ArrTags
      }).
        then(() => {
          this.router.navigate(['/develop/restaurant'], { queryParams: { id: this.restaurantId } });
        });
    } else {
      console.log('invalid');
    }
  }

}
