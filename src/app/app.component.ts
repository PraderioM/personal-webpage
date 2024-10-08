import { Component } from '@angular/core';
import {getHeaderClass, getArrowClass} from "./utils";
import {faCaretLeft, faCaretRight} from '@fortawesome/free-solid-svg-icons';

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

  getLeftArrowOver616Class(): object {
    const arrowClass: any = getArrowClass();
    arrowClass['hidden-header'] = this.startingIndex === 0;
    arrowClass['left-arrow-over-616'] = this.startingIndex > 0;
    return arrowClass;
  }

  getLeftArrowUnder616Class(): object {
    const arrowClass: any = getArrowClass();
    arrowClass['hidden-header'] = this.startingIndex === 0;
    arrowClass['left-arrow-under-616'] = this.startingIndex > 0;
    return arrowClass;
  }

  getRightArrowOver616Class(): object {
    const arrowClass: any = getArrowClass();
    arrowClass['right-arrow-number-0-over-616'] = this.startingIndex === 0;
    arrowClass['right-arrow-number-1-over-616'] = this.startingIndex === 1;
    arrowClass['right-arrow-number-2-over-616'] = this.startingIndex === 2;
    arrowClass['right-arrow-number-3-over-616'] = this.startingIndex === 3;
    arrowClass['hidden-header'] = this.startingIndex > 3;
    return arrowClass;
  }

  getRightArrowUnder616Class(): object {
    const arrowClass: any = getArrowClass();
    arrowClass['hidden-header'] = this.startingIndex === 5;
    arrowClass['right-arrow-under-616'] = this.startingIndex < 5;
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

  moveStartIndex(step: number): void {
    this.startingIndex = Math.max(0, Math.min(5, this.startingIndex + step));
  }

  selectStartingIndex(): void {
    if (this.startingIndex == 0) {
      this.selectHome();
    } else if (this.startingIndex == 1) {
      this.selectJobs();
    } else if (this.startingIndex == 2) {
      this.selectPublications();
    } else if (this.startingIndex == 3) {
      this.selectTalks();
    } else if (this.startingIndex == 4) {
      this.selectTeaching();
    } else if (this.startingIndex == 5) {
      this.selectOther();
    }
  }

  changeSelectedPage(step: number): void {
    this.moveStartIndex(step);
    this.selectStartingIndex();
  }
}
