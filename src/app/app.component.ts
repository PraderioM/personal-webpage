import { Component } from '@angular/core';
import {getHeaderClass} from "./utils";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  homeSelected = true;
  CVSelected = false;
  publicationsSelected = false;
  teachingSelected = false;

  deselectAll(): void {
    this.homeSelected = false;
    this.CVSelected = false;
    this.publicationsSelected = false;
    this.teachingSelected = false;
  }

  selectHome(): void {
    this.deselectAll();
    this.homeSelected = true;
  }

  selectCV(): void {
    this.deselectAll();
    this.CVSelected = true;
  }

  selectPublications(): void {
    this.deselectAll();
    this.publicationsSelected = true;
  }

  selectTeaching(): void {
    this.deselectAll();
    this.teachingSelected = true;
  }

  getHomeHeaderClass(): object {
    const headerClass: any = getHeaderClass();
    headerClass['w3-selected'] = this.homeSelected;
    return headerClass;
  }

  getCVHeaderClass(): object {
    const headerClass: any = getHeaderClass();
    headerClass['w3-selected'] = this.CVSelected;
    return headerClass;
  }

  getPublicationsHeaderClass(): object {
    const headerClass: any = getHeaderClass();
    headerClass['w3-selected'] = this.publicationsSelected;
    return headerClass;
  }

  getTeachingHeaderClass(): object {
    const headerClass: any = getHeaderClass();
    headerClass['w3-selected'] = this.teachingSelected;
    return headerClass;
  }
}
