// app.component.ts

import { Component, OnInit } from '@angular/core';
import { CountryapiService } from './service/api/countryapi.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private api: CountryapiService) {}

  ngOnInit(): void {
  }
}

