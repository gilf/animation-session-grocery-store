export default class GroceryItem {
  bought: boolean;
  constructor(public id, public name) {
    this.bought = false;
  }
}
