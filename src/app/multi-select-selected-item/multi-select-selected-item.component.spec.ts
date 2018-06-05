import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiSelectSelectedItemComponent } from './multi-select-selected-item.component';

describe('MultiSelectSelectedItemComponent', () => {
  let component: MultiSelectSelectedItemComponent;
  let fixture: ComponentFixture<MultiSelectSelectedItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MultiSelectSelectedItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultiSelectSelectedItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
