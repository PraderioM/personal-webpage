import { Component } from '@angular/core';
import {getHeaderClass, getArrowClass} from "./utils";
import {faCaretLeft, faCaretRight} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  homeSelected = false; // TODO change back
  jobsSelected = true; // TODO change back
  publicationsSelected = false;
  talksSelected = false;
  teachingSelected = false;
  otherSelected = false;
  startingIndex = 0;

  faCaretRight = faCaretRight;
  faCaretLeft = faCaretLeft;

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

  getLeftArrowClass(): object {
    const arrowClass: any = getArrowClass();
    arrowClass['hidden-header'] = this.startingIndex === 0;
    arrowClass['left-arrow'] = this.startingIndex > 0;
    return arrowClass;
  }

  getRightArrowClass(): object {
    const arrowClass: any = getArrowClass();
    arrowClass['right-arrow-number-0'] = this.startingIndex === 0;
    arrowClass['right-arrow-number-1'] = this.startingIndex === 1;
    arrowClass['right-arrow-number-2'] = this.startingIndex === 2;
    arrowClass['right-arrow-number-3'] = this.startingIndex === 3;
    arrowClass['right-arrow-number-4'] = this.startingIndex === 4;
    arrowClass['right-arrow-number-5'] = this.startingIndex === 5;
    return arrowClass;
  }

  getHomeHeaderClass(): object {
    const headerClass: any = getHeaderClass(0 - this.startingIndex);
    headerClass['w3-selected'] = this.homeSelected;
    return headerClass;
  }

  getJobsHeaderClass(): object {
    const headerClass: any = getHeaderClass(1 - this.startingIndex);
    headerClass['w3-selected'] = this.jobsSelected;
    return headerClass;
  }

  getPublicationsHeaderClass(): object {
    const headerClass: any = getHeaderClass(2 - this.startingIndex);
    headerClass['w3-selected'] = this.publicationsSelected;
    return headerClass;
  }

  getTalksHeaderClass(): object {
    const headerClass: any = getHeaderClass(3 - this.startingIndex);
    headerClass['w3-selected'] = this.talksSelected;
    return headerClass;
  }

  getTeachingHeaderClass(): object {
    const headerClass: any = getHeaderClass(4 - this.startingIndex);
    headerClass['w3-selected'] = this.teachingSelected;
    return headerClass;
  }

  getOtherHeaderClass(): object {
    const headerClass: any = getHeaderClass(5 - this.startingIndex);
    headerClass['w3-selected'] = this.otherSelected;
    return headerClass;
  }

  moveStartIndex(step: number) {
    this.startingIndex = Math.max(0, Math.min(5, this.startingIndex + step));
  }
}
