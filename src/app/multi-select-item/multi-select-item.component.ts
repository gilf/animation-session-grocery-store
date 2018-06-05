import {Component, EventEmitter, Input, OnDestroy, Output} from '@angular/core';
import { TweenMax, TimelineMax, Elastic, Power2 } from 'gsap/TweenMax';
import {TimelineManagerService} from '../services/timeline-manager.service';

@Component({
  selector: 'app-multi-select-item',
  templateUrl: './multi-select-item.component.html',
  styleUrls: ['./multi-select-item.component.css']
})
export class MultiSelectItemComponent implements OnDestroy {
  @Input() item;
  @Output() addNewItem: EventEmitter<any> = new EventEmitter<any>();
  @Output() itemDestroyed: EventEmitter<any> = new EventEmitter<any>();
  constructor(private tmManager: TimelineManagerService) { }

  ngOnDestroy() {
    this.itemDestroyed.emit();
    this.itemDestroyed.complete();
  }

  select(evt, item) {
    const el = evt.target || evt.srcElement || evt.currentTarget;
    const boundingRect = el.getBoundingClientRect();
    const xOffset =  evt.clientX - boundingRect.left;
    const yOffset =  evt.clientY - boundingRect.top;

    const getSelectOptionTL = this.getSelectedOptionTL(el, xOffset, yOffset, null);
    getSelectOptionTL.addCallback(this.addNewItemCallback.bind(this), 0, [el]);
    this.tmManager.add(getSelectOptionTL);
  }

  addNewItemCallback(el) {
    this.addNewItem.emit({ el: el, item: this.item });
  }

  getSelectedOptionTL(selectedOption, xOffset = 0, yOffset = 0, callback) {
    const tl = new TimelineMax({onComplete: callback});
    const [caption, activeBackground, frame] =
      ['.caption', '.activeBackground', '.frame'].map(selector => selectedOption.querySelector(selector));

    tl.set(activeBackground, {
      scale: 0.1,
      transformOrigin: 'center',
      opacity: 0,
      left: xOffset,
      top: yOffset
    }, 0)
      .set(selectedOption, { clipPath: `circle(150% at ${xOffset}px ${yOffset}px)` })
      .to(activeBackground, 0.5, {
        scale: 1.5,
        transformOrigin: 'center',
        opacity: 1,
        ease: Power2.easeOut
      }, 0)
      .to(selectedOption, 0.5, {
        clipPath: `circle(0.1% at ${xOffset}px ${yOffset}px)`,
        ease: Power2.easeOut
      }, 0.5);

    return tl;
  }
}
