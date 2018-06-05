import { Component, OnInit } from '@angular/core';
import GroceryItem from '../models/GroceryItem';

@Component({
  selector: 'app-grocery-store',
  templateUrl: './grocery-store.component.html',
  styleUrls: ['./grocery-store.component.css']
})
export class GroceryStoreComponent implements OnInit {
  items: Array<GroceryItem>;
  suggestions: Array<string>;

  constructor() {
    this.items = new Array<GroceryItem>();
    this.suggestions = ['Corn', 'Ice Cream', 'Cucumber', 'Tomato'];
  }

  ngOnInit() {
  }

  deleteItem(item) {
    const index = this.items.findIndex((i) => (i.id === item.id));
    this.items.splice(index, 1);
  }

  addItem(name) {
    this.items.push(new GroceryItem(this.items.length + 1, name));
  }
}
