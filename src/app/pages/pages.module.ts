import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { LandingPageComponent } from './landing-page/landing-page.component';

import { MaterialModulesModule } from '../material-modules/material-modules.module';

@NgModule({
  declarations: [LandingPageComponent],
  imports: [
    CommonModule,
    PagesRoutingModule,
    MaterialModulesModule
  ]
})
export class PagesModule { }
