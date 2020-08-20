import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-develop',
  templateUrl: './develop.component.html',
  styleUrls: ['./develop.component.scss']
})
export class DevelopComponent implements OnInit {

  isShowing = true;

  user$ = this.authService.user$;

  constructor(
    private authService: AuthService
  ) { }

  ngOnInit(): void {
  }

  toggleSidenav() {
    this.isShowing = !this.isShowing;
  }
}
