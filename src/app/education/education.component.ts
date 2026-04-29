import { Component, OnInit } from '@angular/core';
import { EducationService } from '../services/education-service/education.service';
import { Education } from '../models/education/education.model';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {
  educationList: Education[] = [];

  constructor(private eduService: EducationService) { }

  ngOnInit(): void {
    this.eduService.getEducation().subscribe((data: Education[]) => {
      this.educationList = data;
    });
  }
}
