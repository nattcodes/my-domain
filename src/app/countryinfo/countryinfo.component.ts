import { Component, OnInit } from '@angular/core';
import { CountryapiService } from '../service/api/countryapi.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Country, Currencies, Languages } from '../types/countrytypes';

@Component({
  selector: 'app-countryinfo',
  templateUrl: './countryinfo.component.html',
  styleUrls: ['./countryinfo.component.scss']
})
export class CountryinfoComponent implements OnInit {
  countryName?: Observable<Country>;

  constructor(private api: CountryapiService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: { [key: string]: string }) => {
      this.countryName = this.api.getCountry(params['country']);
    });
  }
  countryCurrency(currency: Currencies[]){
    return currency.map(currency => currency.AOA?.name).join(',');
  }
  countryLanguage(language: Languages[]){
    return language.map(Language => Language.afr).join(',');
  }
}
