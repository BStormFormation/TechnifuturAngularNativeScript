import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { PokeRoutingModule } from './poke-routing.module';
import { PokeComponent } from './components/poke/poke.component';
import { ListComponent } from './components/list/list.component';
import { PokeService } from './services/poke.service';
import { DetailComponent } from './components/detail/detail.component';


@NgModule({
  declarations: [PokeComponent, ListComponent, DetailComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    PokeRoutingModule
  ],
  providers: [PokeService]
})
export class PokeModule { }
