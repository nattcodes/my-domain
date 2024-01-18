// countryapi.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Country } from 'src/app/types/countrytypes';

@Injectable({
  providedIn: 'root',
})
export class CountryapiService {
  private apiUrl = 'https://restcountries.com/v3.1';

  constructor(private http: HttpClient) {}

  getAllCountries(){
    return this.http.get<Country[]>(`${this.apiUrl}/all`);
  }

  getCountry(name: string): Observable<Country> {
    return this.http
      .get<Country[]>(`${this.apiUrl}/name/${name}`)
      .pipe(map((response: Country[]) => response[0])); // Assuming you expect only one country based on the name
  }
}
