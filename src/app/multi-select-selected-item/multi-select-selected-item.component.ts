import {Component, Input, AfterViewInit, ElementRef} from '@angular/core';
import { TweenMax, TimelineMax, Elastic, Power2 } from 'gsap/TweenMax';
import {TimelineManagerService} from '../services/timeline-manager.service';

@Component({
  selector: 'app-multi-select-selected-item',
  templateUrl: './multi-select-selected-item.component.html',
  styleUrls: ['./multi-select-selected-item.component.css']
})
export class MultiSelectSelectedItemComponent implements AfterViewInit {
  @Input() item;
  constructor(private tmManager: TimelineManagerService, private elmRef: ElementRef) { }

  ngAfterViewInit() {
    const tl = this.getSelectedItemTL(this.elmRef.nativeElement);
    this.tmManager.add(tl, '+1.1');
  }

  getSelectedItemTL(selectedItem) {
    const tl = new TimelineMax();
    const [caption, close, frame] = ['.caption', '.close', '.frame'].map(selector => selectedItem.querySelector(selector));

    tl.set(frame, {
      width: '45px',
      scale: 0.1,
      opacity: 0,
      transformOrigin: 'center'
    }).
    set([caption, close], {
      opacity: 0,
      x: -20
    }).
    to(frame, 0.5, {
      scale: 1,
      opacity: 1,
      transformOrigin: 'center'
    }).
    to([caption, close], 1.1, {
      opacity: 1,
      x: 0,
      ease: Elastic.easeOut.config(1, 1)
    }, 1).
    to(frame, 1.1, {
      width: '100%',
      ease: Elastic.easeOut.config(1.2, 1)
    }, 1);

    return tl;
  }
}
