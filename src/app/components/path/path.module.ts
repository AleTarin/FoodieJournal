import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PathComponent } from './path.component';
import { PathDescribeComponent } from './path-describe/path-describe.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [PathComponent, PathDescribeComponent],
  exports: [PathComponent]
})
export class PathModule { }
