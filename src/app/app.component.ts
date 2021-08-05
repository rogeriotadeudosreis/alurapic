import { PhotoService } from './photos/photo/photo.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  photos: any[] = [];

  constructor(private photoService: PhotoService) {
    this.photoService
      .listFromUser('flavio')
      .subscribe((photos) => {
        (this.photos = photos)
      });
  }
}
