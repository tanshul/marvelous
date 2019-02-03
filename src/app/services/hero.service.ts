import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  private BASEURL = 'https://gateway.marvel.com:443/v1/public/characters'

  constructor(private http: HttpClient) { }

  getHeroes() {
    let params = new HttpParams().set('apikey', environment.apikey);
    return this.http.get(this.BASEURL, { params })
  }

  getHero(id: number) {
    let params = new HttpParams().set('apikey', environment.apikey);
    return this.http.get(this.BASEURL + '/' + id, { params })
  }
}
