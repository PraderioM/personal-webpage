import { Component } from '@angular/core';
import {getHeaderClass} from "./utils";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  homeSelected = true;
  jobsSelected = false;
  publicationsSelected = false;
  talksSelected = false;
  teachingSelected = false;
  otherSelected = false;

  deselectAll(): void {
    this.homeSelected = false;
    this.jobsSelected = false;
    this.publicationsSelected = false;
    this.talksSelected = false;
    this.teachingSelected = false;
    this.otherSelected = false;
  }

  selectHome(): void {
    this.deselectAll();
    this.homeSelected = true;
  }

  selectJobs(): void {
    this.deselectAll();
    this.jobsSelected = true;
  }

  selectPublications(): void {
    this.deselectAll();
    this.publicationsSelected = true;
  }

  selectTalks(): void {
    this.deselectAll();
    this.talksSelected = true;
  }

  selectTeaching(): void {
    this.deselectAll();
    this.teachingSelected = true;
  }

  selectOther(): void {
    this.deselectAll();
    this.otherSelected = true;
  }

  getHomeHeaderClass(): object {
    const headerClass: any = getHeaderClass();
    headerClass['w3-selected'] = this.homeSelected;
    return headerClass;
  }

  getJobsHeaderClass(): object {
    const headerClass: any = getHeaderClass();
    headerClass['w3-selected'] = this.jobsSelected;
    return headerClass;
  }

  getPublicationsHeaderClass(): object {
    const headerClass: any = getHeaderClass();
    headerClass['w3-selected'] = this.publicationsSelected;
    return headerClass;
  }

  getTalksHeaderClass(): object {
    const headerClass: any = getHeaderClass();
    headerClass['w3-selected'] = this.talksSelected;
    return headerClass;
  }

  getTeachingHeaderClass(): object {
    const headerClass: any = getHeaderClass();
    headerClass['w3-selected'] = this.teachingSelected;
    return headerClass;
  }

  getOtherHeaderClass(): object {
    const headerClass: any = getHeaderClass();
    headerClass['w3-selected'] = this.otherSelected;
    return headerClass;
  }

  protected readonly getHeaderClass = getHeaderClass;
}
