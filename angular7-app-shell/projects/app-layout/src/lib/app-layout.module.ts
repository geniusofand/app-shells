import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppLayoutComponent } from './components';

const routedComponents: any[] = [AppLayoutComponent];

@NgModule({
  declarations: [
    routedComponents
  ],
  exports: [
    routedComponents,
  ],
  imports: [
    CommonModule,
    RouterModule,
  ]
})
export class AppLayoutModule { }
