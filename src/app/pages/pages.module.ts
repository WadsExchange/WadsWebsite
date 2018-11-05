import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { LandingPageComponent } from './landing-page/landing-page.component';

import { MaterialModulesModule } from '../material-modules/material-modules.module';

import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [LandingPageComponent],
  imports: [
    CommonModule,
    PagesRoutingModule,
    MaterialModulesModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class PagesModule { }
