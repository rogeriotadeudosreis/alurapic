import { Injectable, PLATFORM_ID, Inject } from '@angular/core';
import { inject } from '@angular/core/testing';
import { isPlatformBrowser } from '@angular/common'

@Injectable({
  providedIn: 'root',
})
export class PlataformDetectorService {
  constructor(@Inject(PLATFORM_ID) private platformId: string) {}

  isPlatformBrowser() {
      return this.isPlatformBrowser();
  }
}
