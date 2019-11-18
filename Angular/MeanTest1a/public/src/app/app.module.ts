import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { HttpService } from './services/http.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { EditComponent } from './components/edit/edit.component';
import { NewComponent } from './components/new/new.component';
import { DeleteComponent } from './components/delete/delete.component';
import { ReviewComponent } from './components/review/review.component';
import { NewreviewComponent } from './components/newreview/newreview.component'; // not needed?

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EditComponent,
    NewComponent,
    DeleteComponent,
    ReviewComponent,
    NewreviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
