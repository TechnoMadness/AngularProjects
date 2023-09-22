import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {HttpClientModule} from '@angular/common/http';
import { NgCircleProgressModule } from 'ng-circle-progress';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { ExpertiseComponent } from './pages/expertise/expertise.component';
import { ExpertiseService } from './services/expertise.service';
import { MissionsComponent } from './pages/missions/missions.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutUsComponent,
    ExpertiseComponent,
    MissionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,

    NgCircleProgressModule.forRoot({})
  ],
  providers: [ExpertiseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
