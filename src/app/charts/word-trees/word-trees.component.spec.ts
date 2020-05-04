import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WordTreesComponent } from './word-trees.component';

describe('WordTreesComponent', () => {
  let component: WordTreesComponent;
  let fixture: ComponentFixture<WordTreesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WordTreesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WordTreesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
