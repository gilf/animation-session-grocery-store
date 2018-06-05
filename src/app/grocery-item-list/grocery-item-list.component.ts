import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import GroceryItem from '../models/GroceryItem';

@Component({
  selector: 'app-grocery-item-list',
  templateUrl: './grocery-item-list.component.html',
  styleUrls: ['./grocery-item-list.component.css']
})
export class GroceryItemListComponent implements OnInit {
  @Input() items: Array<GroceryItem>;
  @Output() deleteItem: EventEmitter<number> = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  delete(item) {
    this.deleteItem.emit(item);
  }
}
