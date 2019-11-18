import { Component, OnInit } from '@angular/core';
import { PokeService } from '../../services/poke.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Pokemon } from '../../models/pokemon';
import { PokeModule } from '../../poke.module';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  pokemons$: Observable<Pokemon[]>;

  get Age(): number {
    return 24;
  }

  constructor(private pokeService: PokeService, private httpClient: HttpClient) { }

  ngOnInit() {
    this.httpClient.get("https://pokeapi.co/api/v2/").subscribe(data => console.log(data));
    this.pokemons$ = this.pokeService.pokemons;
  }

  addPokemon(pokemon: Pokemon) {
    this.pokeService.add(pokemon);
  }
}
