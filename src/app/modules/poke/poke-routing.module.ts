import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PokeComponent } from './components/poke/poke.component';
import { ListComponent } from './components/list/list.component';
import { DetailComponent } from './components/detail/detail.component';


const routes: Routes = [
  {path: 'pokemon', component: PokeComponent, children: [
    {path: ':region/list', component: ListComponent},
    {path: 'detail/:id', component: DetailComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PokeRoutingModule { }
