import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PublicationsComponent } from './publications/publications.component';
import { TeachingComponent } from './teaching/teaching.component';
import { TalksAndConferencesComponent } from './talks-and-conferences/talks-and-conferences.component';
import { AcademicJobsAndEducationComponent } from './academic-jobs-and-education/academic-jobs-and-education.component';
import { AdditionalInformationComponent } from './additional-information/additional-information.component';
import {NgOptimizedImage} from "@angular/common";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PublicationsComponent,
    TeachingComponent,
    TalksAndConferencesComponent,
    AcademicJobsAndEducationComponent,
    AdditionalInformationComponent
  ],
    imports: [
        BrowserModule,
        NgOptimizedImage
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
