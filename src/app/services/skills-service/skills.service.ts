import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { Skill } from '../../models/skills/skills.model';

@Injectable({
  providedIn: 'root'
})
export class SkillsService {
  constructor(private firestore: AngularFirestore) { }

  getSkills(): Observable<Skill[]> {
    // Usamos el nombre exacto de tu colección: 'skills'
    return this.firestore.collection<Skill>('skills').valueChanges();
  }
}
