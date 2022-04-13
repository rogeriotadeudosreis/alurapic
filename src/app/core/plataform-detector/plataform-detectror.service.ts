import { Inject, Injectable, PLATFORM_ID } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PlataformDetectorService {
  constructor(@Inject(PLATFORM_ID) private platformId: string) {}

  isPlatformBrowser() {
      return this.isPlatformBrowser();
  }
}
