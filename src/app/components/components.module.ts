import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponentComponent } from './nav-component/nav-component.component';

import { MaterialModulesModule } from '../material-modules/material-modules.module';

import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';


@NgModule({
  declarations: [NavComponentComponent],
  imports: [
    CommonModule,
    MaterialModulesModule,
    ScrollToModule.forRoot()
  ],
  exports: [
    NavComponentComponent
  ]
})
export class ComponentsModule { }
