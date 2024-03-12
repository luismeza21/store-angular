import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindPropertiesComponent } from './find-properties.component';

describe('FindPropertiesComponent', () => {
  let component: FindPropertiesComponent;
  let fixture: ComponentFixture<FindPropertiesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FindPropertiesComponent]
    });
    fixture = TestBed.createComponent(FindPropertiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
