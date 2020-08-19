import { Component, OnInit, ElementRef, ViewChild, OnDestroy } from '@angular/core';
import { FormBuilder, Validators, FormControl } from '@angular/forms';
import { ImageCroppedEvent } from 'ngx-image-cropper';
import { Observable, Subscription } from 'rxjs';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { startWith, map } from 'rxjs/operators';
import { RestaurantService } from 'src/app/services/restaurant.service';
import { ActivatedRoute } from '@angular/router';
import { RestaurantGetService } from 'src/app/services/restaurant-get.service';
import { Restaurant } from 'src/app/interfaces/restaurant';

@Component({
  selector: 'app-add-restaurants',
  templateUrl: './add-restaurants.component.html',
  styleUrls: ['./add-restaurants.component.scss']
})
export class AddRestaurantsComponent implements OnInit, OnDestroy {

  restaurant: Restaurant;

  form = this.fb.group({
    name: ['', Validators.required],
    address: ['', Validators.required],
    phoneNumber: ['', Validators.required],
    openTime: ['', Validators.required],
    closeTime: ['', Validators.required],
    description: ['', Validators.required]
  });

  imageChangedEvent: any = '';

  croppedImage: any = null;

  tags: string[] = [];

  allTags: string[] = ['Korean', 'Indian', 'Thai', 'Japanese', 'Italian'];

  filteredTags: Observable<string[]>;

  tagCtrl = new FormControl();

  @ViewChild('tagsInput') tagsInput: ElementRef<HTMLInputElement>;

  subscription: Subscription;

  constructor(
    private fb: FormBuilder,
    private restaurantService: RestaurantService,
    private restaurantGetService: RestaurantGetService,
    private activatedRoute: ActivatedRoute
  ) {
    this.activatedRoute.queryParamMap.subscribe((params) => {
      const id = params.get('id');
      this.restaurantGetService.getRestaurant(id).subscribe((restaurant: Restaurant) => {
        this.restaurant = restaurant;
        this.tags = restaurant.tags;
        this.form.patchValue(restaurant);
      });
    });
    this.activatedRoute.queryParamMap.pipe(
      map((params) => {
        const id = params.get('id');
        this.subscription = this.restaurantGetService.getRestaurant(id).subscribe((restaurant: Restaurant) => {
          this.restaurant = restaurant;
          this.tags = restaurant.tags;
          this.form.patchValue(restaurant);
        });
      })
    );
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
    if (this.restaurant) {
      this.update();
    } else {
      const setTags = new Set(this.tags);
      const ArrTags = Array.from(setTags);
      this.restaurantService.addRestaurant({
        address: this.form.value.address,
        phoneNumber: this.form.value.phoneNumber,
        image: this.croppedImage,
        name: this.form.value.name,
        openTime: this.form.value.openTime,
        closeTime: this.form.value.closeTime,
        description: this.form.value.description,
        tags: ArrTags
      });
    }
  }

  update() {
    const setTags = new Set(this.tags);
    const ArrTags = Array.from(setTags);
    this.restaurantService.updateRestaurant({
      id: this.restaurant.id,
      address: this.form.value.address,
      phoneNumber: this.form.value.phoneNumber,
      image: this.croppedImage,
      name: this.form.value.name,
      openTime: this.form.value.openTime,
      closeTime: this.form.value.closeTime,
      description: this.form.value.description,
      tags: ArrTags
    });
  }

}
