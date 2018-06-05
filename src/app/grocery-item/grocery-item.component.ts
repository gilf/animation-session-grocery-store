import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import GroceryItem from '../models/GroceryItem';

@Component({
  selector: 'app-grocery-item',
  templateUrl: './grocery-item.component.html',
  styleUrls: ['./grocery-item.component.css']
})
export class GroceryItemComponent implements OnInit {
  @Input() item: GroceryItem;
  @Output() deleteItem: EventEmitter<number> = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  delete(item) {
    this.deleteItem.emit(item);
  }
}
