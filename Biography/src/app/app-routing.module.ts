import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { ExpertiseComponent } from './pages/expertise/expertise.component';
import { MissionsComponent } from './pages/missions/missions.component';

const routes: Routes = [
  {
    path: 'home', component: HomeComponent
  },
  {
    path:'',
    redirectTo:'home',
    pathMatch:'full'
  },
  {
    path: 'about-us', component: AboutUsComponent , data: {animation: 'AboutUsPage'}
  },
  {
    path: 'missions', component: MissionsComponent , data: {animation: 'MissionsPage'}
  },
  {
    path: 'expertise', component: ExpertiseComponent , data : {animation: 'ExpertisePage'}
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
