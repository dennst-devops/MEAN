import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GlobeComponent } from '../../components/globe/globe.component';

const routes: Routes = [
  {path: 'globe', component: GlobeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
