import { NgModule } from '@angular/core';

import { NgOptimizedImage } from "@angular/common";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
    imports: [
        NgOptimizedImage,
        FontAwesomeModule,
    ],
  providers: []
})
export class AppModule { }
