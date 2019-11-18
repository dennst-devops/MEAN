import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { NewComponent } from './components/new/new.component';
import { EditComponent } from './components/edit/edit.component';
import { ReviewComponent } from './components/review/review.component';
import { NewreviewComponent } from './components/newreview/newreview.component';

const routes: Routes = [
  {path: 'restaurants', component: HomeComponent},
  {path: 'new', component: NewComponent},
  {path: 'edit/:id', component: EditComponent},
  {path: 'review/:id', component: ReviewComponent},
  {path: 'newreview/:id', component: NewreviewComponent},
  {path: '', pathMatch: 'full', redirectTo: '/restaurants'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
