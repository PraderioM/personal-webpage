import { Component } from '@angular/core';
import {OtherJobsComponent} from "./other-jobs/other-jobs.component";
import {EventsComponent} from "./events/events.component";
import {AwardsComponent} from "./awards/awards.component";
import {TrainingComponent} from "./training/training.component";
import {SkillsComponent} from "./skills/skills.component";
import {EDIComponent} from "./edi/edi.component";

@Component({
  selector: 'app-additional-information',
  templateUrl: './additional-information.component.html',
  imports: [
    OtherJobsComponent,
    EventsComponent,
    AwardsComponent,
    TrainingComponent,
    SkillsComponent,
    EDIComponent
  ],
  styleUrls: ['./additional-information.component.css', '../app.component.css']
})
export class AdditionalInformationComponent {

}
