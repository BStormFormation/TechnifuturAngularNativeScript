import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { PokeRoutingModule } from './poke-routing.module';
import { PokeComponent } from './components/poke/poke.component';
import { ListComponent } from './components/list/list.component';
import { PokeService } from './services/poke.service';
import { AddComponent } from './components/add/add.component';


@NgModule({
  declarations: [PokeComponent, ListComponent, AddComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    PokeRoutingModule
  ],
  providers: [PokeService]
})
export class PokeModule { }
