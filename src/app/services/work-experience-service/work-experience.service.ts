import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { WorkExperience } from '../../models/work-experience/work-experience.model';

@Injectable({
  providedIn: 'root'
})
export class WorkExperienceService {
  constructor(private firestore: AngularFirestore) { }

  getWorkExperience(): Observable<WorkExperience[]> {
    // Es vital que tenga el .valueChanges() al final
    return this.firestore.collection<WorkExperience>('work-experience').valueChanges();
  }
}
