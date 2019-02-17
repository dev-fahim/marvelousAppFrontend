import { ShadowDirective } from './shadow.directive';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HoverRowDirective } from './hover-row.directive';

@NgModule({
  declarations: [
    ShadowDirective,
    HoverRowDirective
  ],
  exports: [
    CommonModule,
    ShadowDirective,
    HoverRowDirective,
  ]
})
export class SharedModule { }
