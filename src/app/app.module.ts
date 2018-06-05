import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { GroceryItemListComponent } from './grocery-item-list/grocery-item-list.component';
import { GroceryStoreComponent } from './grocery-store/grocery-store.component';
import { GroceryItemComponent } from './grocery-item/grocery-item.component';
import { MultiSelectComponent } from './multi-select/multi-select.component';
import { TimelineManagerService } from './services/timeline-manager.service';
import { MultiSelectSelectedItemComponent } from './multi-select-selected-item/multi-select-selected-item.component';
import { MultiSelectItemComponent } from './multi-select-item/multi-select-item.component';

@NgModule({
  declarations: [
    AppComponent,
    GroceryItemListComponent,
    GroceryStoreComponent,
    GroceryItemComponent,
    MultiSelectComponent,
    MultiSelectSelectedItemComponent,
    MultiSelectItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [TimelineManagerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
