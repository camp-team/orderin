import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { User } from '../interfaces/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DeveloperGetService {

  constructor(
    private db: AngularFirestore
  ) { }

  getDevelopers(): Observable<User[]> {
    return this.db.collection<User>(`users`, (ref) => ref.where('developer', '==', true)).valueChanges();
  }
}
