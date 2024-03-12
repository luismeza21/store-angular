import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopSuggestionComponent } from './top-suggestion.component';

describe('TopSuggestionComponent', () => {
  let component: TopSuggestionComponent;
  let fixture: ComponentFixture<TopSuggestionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TopSuggestionComponent]
    });
    fixture = TestBed.createComponent(TopSuggestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
