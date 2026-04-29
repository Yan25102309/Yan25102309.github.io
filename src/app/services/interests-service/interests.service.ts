import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { Interest } from '../../models/interests/interests.model';

@Injectable({
  providedIn: 'root'
})
export class InterestsService {
  constructor(private firestore: AngularFirestore) { }

  getInterests(): Observable<Interest[]> {
    return this.firestore.collection<Interest>('interests').valueChanges();
  }
}
