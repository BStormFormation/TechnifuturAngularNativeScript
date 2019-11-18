import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PokeService {

  constructor(private httpClient: HttpClient) {
  }

  get regions$(): Observable<any> {
    return this.httpClient.get<any>(`${environment.base_uri}pokedex`).pipe(map(pokedexes => pokedexes.results));
  }
  getPokemons$(region: string): Observable<any> {
    return this.httpClient.get<any>(`${environment.base_uri}pokedex/${region}`)
    .pipe(
      map(region => {
        return { names: region.names, entries: region.pokemon_entries}
      })
    );
  }

  getPokemon$(id: number): Observable<any> {
    return this.httpClient.get<any>(`${environment.base_uri}pokemon/${id}`);
  }
}
