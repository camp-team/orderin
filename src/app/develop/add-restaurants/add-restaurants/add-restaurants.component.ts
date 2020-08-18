import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, Validators, FormControl } from '@angular/forms';
import { ImageCroppedEvent } from 'ngx-image-cropper';
import { Observable } from 'rxjs';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { startWith, map } from 'rxjs/operators';
import { RestaurantService } from 'src/app/services/restaurant.service';

@Component({
  selector: 'app-add-restaurants',
  templateUrl: './add-restaurants.component.html',
  styleUrls: ['./add-restaurants.component.scss']
})
export class AddRestaurantsComponent implements OnInit {

  form = this.fb.group({
    name: ['', Validators.required],
    address: ['', Validators.required],
    openTime: ['', Validators.required],
    closeTime: ['', Validators.required],
    description: ['', Validators.required]
  });

  imageChangedEvent: any = '';

  croppedImage: any = '';

  tags: string[] = [];

  allTags: string[] = ['Korean', 'Indian', 'Thai', 'Japanese', 'Italian'];

  filteredTags: Observable<string[]>;

  tagCtrl = new FormControl();

  @ViewChild('tagsInput') tagsInput: ElementRef<HTMLInputElement>;

  constructor(
    private fb: FormBuilder,
    private restaurantService: RestaurantService
  ) { }

  ngOnInit(): void {
    this.filteredTags = this.tagCtrl.valueChanges.pipe(
      startWith(null),
      map((tag: string | null) => tag ? this._filter(tag) : this.allTags.slice()));
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
    const setTags = new Set(this.tags);
    const ArrTags = Array.from(setTags);
    this.restaurantService.addRestaurant({
      address: this.form.value.address,
      image: this.croppedImage,
      name: this.form.value.name,
      openTime: this.form.value.openTime,
      closeTime: this.form.value.closeTime,
      description: this.form.value.description,
      tags: ArrTags
    });
  }

}
