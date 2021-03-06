import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { BlogFooterComponent } from './blog-footer';
import { BlogHeaderComponent } from './blog-header';
import { DropdownDirective } from './dropdown';
import { PagerComponent } from './pager';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    JsonpModule,
  ],
  declarations: [
    BlogFooterComponent,
    BlogHeaderComponent,
    DropdownDirective,
    PagerComponent
  ],
  providers: [],
  exports: [
    CommonModule,
    FormsModule,
    BlogFooterComponent,
    BlogHeaderComponent,
    DropdownDirective,
    PagerComponent
  ]
})
export class SharedModule {

}
