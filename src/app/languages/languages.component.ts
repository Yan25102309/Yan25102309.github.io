import { Component, OnInit } from '@angular/core';
import { LanguagesService } from '../services/languages-service/languages.service';
import { Language } from '../models/languages/languages.model';

@Component({
  selector: 'app-languages',
  templateUrl: './languages.component.html',
  styleUrls: ['./languages.component.css']
})
export class LanguagesComponent implements OnInit {
  languages: Language[] = [];

  constructor(private langService: LanguagesService) { }

  ngOnInit(): void {
    this.langService.getLanguages().subscribe((data: Language[]) => {
      console.log('Datos de idiomas recibidos:', data); 
      this.languages = data;
    });
  }
}
