import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { MoviePageComponent } from './pages/movie-page/movie-page.component';
import { CreateMovieComponent } from './pages/create-movie/create-movie.component';

const routes: Routes = [
  {
    path:"home",
    component:HomeComponent
  },
  {
    path:'',
    redirectTo:'home',
    pathMatch:'full'
  },
  {
    path:'create',
    component:CreateMovieComponent
  },
  {
    path:'movie-page/:id',
    component:MoviePageComponent
  },
  {
    path:"about-us",
    component:AboutUsComponent
  },
  {
    path:"movie-page",
    component:MoviePageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
