import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PublicationsComponent } from './publications/publications.component';
import { TeachingComponent } from './teaching/teaching.component';
import { TalksAndConferencesComponent } from './talks-and-conferences/talks-and-conferences.component';
import { AcademicJobsAndEducationComponent } from './academic-jobs-and-education/academic-jobs-and-education.component';
import { AdditionalInformationComponent } from './additional-information/additional-information.component';
import { NgOptimizedImage } from "@angular/common";
import { OtherJobsComponent } from './additional-information/other-jobs/other-jobs.component';
import { EventsComponent } from './additional-information/events/events.component';
import { AwardsComponent } from './additional-information/awards/awards.component';
import { TrainingComponent } from './additional-information/training/training.component';
import { SkillsComponent } from './additional-information/skills/skills.component';
import { EDIComponent } from './additional-information/edi/edi.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PublicationsComponent,
    TeachingComponent,
    TalksAndConferencesComponent,
    AcademicJobsAndEducationComponent,
    AdditionalInformationComponent,
    OtherJobsComponent,
    EventsComponent,
    AwardsComponent,
    TrainingComponent,
    SkillsComponent,
    EDIComponent
  ],
    imports: [
        BrowserModule,
        NgOptimizedImage,
        FontAwesomeModule,
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
