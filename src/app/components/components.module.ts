import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponentComponent } from './nav-component/nav-component.component';

import { MaterialModulesModule } from '../material-modules/material-modules.module';


@NgModule({
  declarations: [NavComponentComponent],
  imports: [
    CommonModule,
    MaterialModulesModule
  ],
  exports: [
    NavComponentComponent
  ]
})
export class ComponentsModule { }
