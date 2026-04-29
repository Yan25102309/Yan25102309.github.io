import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { Language } from '../../models/languages/languages.model';

@Injectable({
  providedIn: 'root'
})
export class LanguagesService {
  constructor(private firestore: AngularFirestore) { }

  getLanguages(): Observable<Language[]> {
    // CAMBIO AQUÍ: 'languajes' con J para que coincida con tu Firebase
    return this.firestore.collection<Language>('languajes').valueChanges();
  }
}
