import { Component, OnInit } from '@angular/core';
import { PokeService } from '../../services/poke.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { PokeModule } from '../../poke.module';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'poke-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  region: string;
  pokemons$: Observable<any>;

  constructor(private pokeService: PokeService, private activeRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.activeRoute.params.subscribe(params => {
      this.region = params.region;

      this.pokemons$ = this.pokeService.getPokemons$(this.region);

      this.pokemons$.subscribe(data => console.log(data));
    });

  }
}
