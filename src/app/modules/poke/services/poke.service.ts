import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { PokeModule } from '../poke.module';
import { Pokemon } from '../models/pokemon';

@Injectable({
  providedIn: 'root'
})
export class PokeService {
  private pokemonsSubject: BehaviorSubject<Pokemon[]>;

  constructor() {
    this.pokemonsSubject = new BehaviorSubject<Pokemon[]>([]);
  }

  add(pokemon: Pokemon): void {
    const currentList = this.pokemonsSubject.getValue();

    this.pokemonsSubject.next([...currentList, pokemon]);
  }

  get pokemons(): Observable<Pokemon[]> {
    return this.pokemonsSubject.asObservable();
  }
}
