import { Component, OnInit } from '@angular/core';
import { WorkExperienceService } from '../services/work-experience-service/work-experience.service';
import { WorkExperience } from '../models/work-experience/work-experience.model';

@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.css']
})
export class WorkExperienceComponent implements OnInit {
  workExperience: WorkExperience[] = [];

  constructor(private workService: WorkExperienceService) { }

  ngOnInit(): void {
    this.workService.getWorkExperience().subscribe((data: any[]) => {
      this.workExperience = data.map(item => {
        // METODO DE SEGURIDAD: Normalizamos los logros para que siempre sean un array
        let normalizedAccomplishments: string[] = [];
        
        // Buscamos en todas las posibles variantes de nombre (errores de dedo)
        const rawData = item.accomplishments || item.accoplishment || item.accomplishment || [];

        if (Array.isArray(rawData)) {
          normalizedAccomplishments = rawData;
        } else if (typeof rawData === 'string' && rawData.trim() !== '') {
          // Si por error es un string, lo convertimos en el primer elemento del array
          normalizedAccomplishments = [rawData];
        }

        return {
          ...item,
          // Forzamos los valores por defecto si vienen vacíos
          position: item.position || 'my position',
          company: item.company || 'my company',
          startDate: item.startDate || 'mmm-yyyy',
          endDate: item.endDate || 'mm-yyyy',
          location: item.location || 'city, country',
          accomplishments: normalizedAccomplishments
        };
      });
    });
  }
}
