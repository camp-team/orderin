import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { auth } from 'firebase';
import { User } from '../interfaces/user';
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user$: Observable<User>;

  user: User;

  constructor(
    private afAuth: AngularFireAuth,
    private db: AngularFirestore
  ) {
    this.user$ = this.afAuth.authState.pipe(
      switchMap((user) => {
        if (user) {
          return this.db.doc<User>(`users/${user.uid}`).valueChanges();
        } else {
          return of(null);
        }
      })
    );
    this.afAuth.authState.subscribe((firebaseUser: firebase.User) => {
      if (firebaseUser) {
        this.db.doc<User>(`users/${firebaseUser.uid}`).valueChanges().subscribe((user: User) => {
          this.user = user;
        });
      } else {
        this.user = null;
        return;
      }
    });
  }

  async googleSignin() {
    const provider = new auth.GoogleAuthProvider();
    const credential = await this.afAuth.signInWithPopup(provider);
    return this.updateUserData({
      ...credential.user,
      developer: false
    });
  }

  private updateUserData(user: User) {
    const data = {
      uid: user.uid,
      displayName: user.displayName,
      email: user.email,
      photoURL: user.photoURL,
      developer: user.developer
    };

    return this.db.doc(`users/${user.uid}`).set(data, { merge: true });
  }

  async signOut() {
    await this.afAuth.signOut();
  }
}
