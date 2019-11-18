import { Component, OnInit } from '@angular/core';
import { PokeService } from 'src/app/modules/poke/services/poke.service';
import { Pokemon } from 'src/app/modules/poke/models/pokemon';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'TechniFutur';

  constructor(private pokeService: PokeService) {
  }

  ngOnInit(): void {
    this.pokeService.add({num: 1, nom: 'Bulbizarre'} as Pokemon);
  }
}
