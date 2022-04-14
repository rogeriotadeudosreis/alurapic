import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { PhotoFormComponent } from '../photos/photo-form/photo-form/photo-form.component';
import { PhotoListComponent } from './photo-list/photo-list.component';
import { PhotoComponent } from './photo/photo.component';
import { PhotosComponent } from '../photos/photo-list/photos/photos.component';

@NgModule({
  declarations: [
    PhotoComponent,
    PhotoListComponent,
    PhotoFormComponent,
    PhotosComponent,
  ],
  imports: [HttpClientModule, CommonModule],
})
export class PhotosModule {}
