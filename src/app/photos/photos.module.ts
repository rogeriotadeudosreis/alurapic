import { DarkenOnHoverModule } from './../shared/directives/darken-on-hover/darken-on-hover.module';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { PhotoFormComponent } from '../photos/photo-form/photo-form/photo-form.component';
import { PhotosComponent } from '../photos/photo-list/photos/photos.component';
import { CardModule } from './../shared/components/card/card.module';
import { FilterByDescription } from './photo-list/filter-by-description.pipe';
import { LoadButtonComponent } from './photo-list/load-button/load-button.component';
import { PhotoListComponent } from './photo-list/photo-list.component';
import { SearchComponent } from './photo-list/search/search.component';
import { PhotoComponent } from './photo/photo.component';

@NgModule({
  declarations: [
    PhotoComponent,
    PhotoListComponent,
    PhotoFormComponent,
    PhotosComponent,
    FilterByDescription,
    LoadButtonComponent,
    SearchComponent,
  ],
  imports: [HttpClientModule, CommonModule, CardModule, DarkenOnHoverModule],
})
export class PhotosModule {}
