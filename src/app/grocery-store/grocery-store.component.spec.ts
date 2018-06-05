import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroceryStoreComponent } from './grocery-store.component';

describe('GroceryStoreComponent', () => {
  let component: GroceryStoreComponent;
  let fixture: ComponentFixture<GroceryStoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroceryStoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroceryStoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
