import { Component, OnInit } from '@angular/core';
import { DeveloperGetService } from 'src/app/services/developer-get.service';
import { Observable } from 'rxjs';
import { User } from 'src/app/interfaces/user';

@Component({
  selector: 'app-developers',
  templateUrl: './developers.component.html',
  styleUrls: ['./developers.component.scss']
})
export class DevelopersComponent implements OnInit {

  developers: Observable<User[]>;

  constructor(
    private developerGetService: DeveloperGetService
  ) {
    this.developers = developerGetService.getDevelopers();
  }

  ngOnInit(): void {
  }

}
