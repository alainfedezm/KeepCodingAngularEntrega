import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from './components/loader/loader.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { CreatorsPipe } from './pipes/creators.pipe';
import { CursorChangeDirective } from './directives/cursor-change.directive';
import {MatPaginatorModule} from '@angular/material/paginator';




@NgModule({
  declarations: [
    LoaderComponent,
    PaginationComponent,
    CreatorsPipe,
    CursorChangeDirective,
  ],
  imports: [
    CommonModule,
    MatPaginatorModule,
  ],
  exports: [
    LoaderComponent,
    PaginationComponent,
    CreatorsPipe,
    CursorChangeDirective,

  ]
})
export class SharedModule { }
