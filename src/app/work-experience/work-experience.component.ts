import { Component, OnInit } from '@angular/core';
import { WorkExperienceService } from '../services/work-experience-service/work-experience.service';
import { WorkExperience } from '../models/work-experience/work-experience.model';

@Component({
  selector: 'app-work-experience',
  // CORRECCIÓN: La ruta debe ser su propio HTML, no el del header
  templateUrl: './work-experience.component.html', 
  styleUrls: ['./work-experience.component.css']
})
export class WorkExperienceComponent implements OnInit {
  workExperience: WorkExperience[] = [];

  constructor(private workService: WorkExperienceService) { }

  ngOnInit(): void {
    this.workService.getWorkExperience().subscribe((data: WorkExperience[]) => {
      this.workExperience = data;
    });
  }
}
