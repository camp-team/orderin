import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { User } from 'src/app/interfaces/user';

@Component({
  selector: 'app-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss']
})
export class ShellComponent implements OnInit {

  user$ = this.authService.user$;

  constructor(
    private authService: AuthService
  ) { }

  ngOnInit(): void { }

}
