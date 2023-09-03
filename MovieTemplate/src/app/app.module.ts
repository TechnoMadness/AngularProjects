import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import {MatGridListModule} from '@angular/material/grid-list';
import {HttpClientModule} from '@angular/common/http';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';

import { MoviesListService } from './services/list.movies.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { CategoriesComponent } from './pages/home/components/categories/categories.component';
import { ProductListComponent } from './pages/home/components/product-list/product-list.component';
import { HeaderComponent } from './pages/home/components/header/header.component';
import {TruncatePipe} from './pipes/turncate.pipe';
import { MoviePageComponent } from './pages/movie-page/movie-page.component'


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutUsComponent,
    CategoriesComponent,
    ProductListComponent,
    HeaderComponent,
    TruncatePipe,
    MoviePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    HttpClientModule,

    MatGridListModule,MatButtonModule,MatCardModule
  ],
  providers: [MoviesListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
