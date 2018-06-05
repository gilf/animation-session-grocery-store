import { Injectable } from '@angular/core';
import { TweenMax, TimelineMax } from 'gsap/TweenMax';

@Injectable()
export class TimelineManagerService {
  mainTL: TimelineMax;

  constructor() {
    this.mainTL = new TimelineMax({
      autoRemoveChildren: true
    });
  }

  add(element, timing?) {
    this.mainTL.add(element, timing);
  }
}
