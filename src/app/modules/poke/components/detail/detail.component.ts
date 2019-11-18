import { Component, OnInit } from '@angular/core';
import { PokeService } from '../../services/poke.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  pokemon: any;

  constructor(private pokeService: PokeService, private activeRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activeRoute.params.subscribe(params => {
      this.pokeService.getPokemon$(parseInt(params.id, 0)).subscribe(data => this.pokemon = data);
    });
  }

}
