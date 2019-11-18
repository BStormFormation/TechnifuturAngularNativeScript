import { Component, OnInit } from '@angular/core';
import { PokeService } from '../../services/poke.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'poke-home',
  templateUrl: './poke.component.html',
  styleUrls: ['./poke.component.scss']
})
export class PokeComponent implements OnInit {
  regions$: Observable<any>;
  constructor(private pokeService: PokeService) { }

  ngOnInit() {
    this.regions$ = this.pokeService.regions$;
  }

}
