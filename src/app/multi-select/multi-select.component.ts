import {AfterViewInit, Component, ElementRef, Input, QueryList, ViewChild, ViewChildren} from '@angular/core';
import { TweenMax, TimelineMax, Elastic, Power2 } from 'gsap/TweenMax';
import {TimelineManagerService} from "app/services/timeline-manager.service";
import {MultiSelectItemComponent} from '../multi-select-item/multi-select-item.component';

@Component({
  selector: 'app-multi-select',
  templateUrl: './multi-select.component.html',
  styleUrls: ['./multi-select.component.css'],
})
export class MultiSelectComponent implements AfterViewInit {
  @Input() items: Array<string>;
  selectedItems: Array<string> = [];
  @ViewChild('optionList') private optionList: ElementRef;
  @ViewChildren('app-multi-select-item') private multiSelectItems: QueryList<MultiSelectItemComponent>;

  constructor(private tmManager: TimelineManagerService) { }

  ngAfterViewInit() {
    this.multiSelectItems.forEach((item, index) => {
      item.itemDestroyed.subscribe( () => this.resetAfterItemRemoved(index));
    });
  }

  addNewItem(data) {
    this.selectedItems.push(data.el.textContent);
    const itemIndex = this.items.indexOf(data.item);
    this.tmManager.add(this.getShiftUpTL(itemIndex, () => {
        this.items.splice(itemIndex, 1);
    }));
  }

  getShiftUpTL(itemIndex, callback) {
    const tl = new TimelineMax();
    const nextSiblings = this.optionList.nativeElement.querySelectorAll(`app-multi-select-item:nth-child(${itemIndex}) ~ app-multi-select-item li`);
    if (nextSiblings) {
      tl.to(nextSiblings, 0.5, {
        y: -72,
        onComplete: callback
      }, 0);
    }

    return tl;
  }

  resetAfterItemRemoved(itemIndex) {
    const tl = new TimelineMax();
    const nextSiblings = this.optionList.nativeElement.querySelectorAll(`app-multi-select-item:nth-child(${itemIndex}) ~ app-multi-select-item li`);
    if (nextSiblings) {
      tl.set(nextSiblings, {y: 0});
    }

    return tl;
  }
}
