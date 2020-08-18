import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-restaurants',
  templateUrl: './add-restaurants.component.html',
  styleUrls: ['./add-restaurants.component.scss']
})
export class AddRestaurantsComponent implements OnInit {

  form = this.fb.group({
    name: ['', Validators.required],
    openTime: ['', Validators.required],
    closeTime: ['', Validators.required],
    description: ['', Validators.required]
  });

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
  }

  submit() {
    console.log(this.form.value);
  }

}
