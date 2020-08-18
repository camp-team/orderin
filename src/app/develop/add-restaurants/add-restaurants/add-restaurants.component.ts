import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ImageCroppedEvent } from 'ngx-image-cropper';

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

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
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
    console.log(this.form.value);
  }

}
