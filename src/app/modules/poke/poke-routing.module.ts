import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PokeComponent } from './components/poke/poke.component';
import { ListComponent } from './components/list/list.component';


const routes: Routes = [
  {path: 'poke', component: PokeComponent, children: [
    {path: 'a', component: ListComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PokeRoutingModule { }
