import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { Certificate } from '../../models/certificates/certificates.model';

@Injectable({
  providedIn: 'root'
})
export class CertificatesService {
  constructor(private firestore: AngularFirestore) { }

  getCertificates(): Observable<Certificate[]> {
    // Apuntamos a tu colección 'certificates'
    return this.firestore.collection<Certificate>('certificates').valueChanges();
  }
}
