import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import { Photo } from '../photo/photo';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.scss'],
})
export class PhotoListComponent implements OnInit, OnDestroy {
  photos: Photo[] = [];
  filter: string = '';
  debounce: Subject<string> = new Subject<string>();

  constructor(private activateRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.photos = this.activateRoute.snapshot.data['photos'];
    this.debounce
      .pipe(debounceTime(300))
      .subscribe((filter) => (this.filter = filter));
  }

  ngOnDestroy(): void {
    this.debounce.unsubscribe();
  }
}
