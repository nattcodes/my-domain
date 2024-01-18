import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CountryapiService } from '../service/api/countryapi.service';
import { Observable } from 'rxjs';
import { Country } from '../types/countrytypes';

const regions = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania', 'Antarctic'];

@Component({
  selector: 'app-home-section',
  templateUrl: './home-section.component.html',
  styleUrls: ['./home-section.component.scss']
})
export class HomeSectionComponent implements OnInit {
  searchCountry: string = ''; 
  source: Country[] = [];
  searchByRegion: string = '';
  regionOptions = regions;
  
  @Output() 
  onChangeValue: EventEmitter<string> = new EventEmitter();

  regionHandler() {
    this.onChangeValue.emit(this.searchByRegion);
  }

  constructor(private api: CountryapiService) {}

  ngOnInit(): void {
    this.api.getAllCountries().subscribe(countries => {
      this.source = countries;
      console.log()
    });
  }

  get filterCountries(): Country[] {
    if (!this.searchCountry && !this.searchByRegion) {
      return this.source;
    }

    let filteredCountries = this.source;

    if (this.searchByRegion) {
      filteredCountries = filteredCountries.filter(country =>
        country.region.includes(this.searchByRegion)
      );
    }

    if (this.searchCountry) {
      const searchTerm = this.searchCountry.trim().toLowerCase();
      filteredCountries = filteredCountries.filter(country =>
        country.name.common.toLowerCase().includes(searchTerm)
      );
    }

    return filteredCountries;
  }

  
}
