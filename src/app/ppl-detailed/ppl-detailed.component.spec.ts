import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PplDetailedComponent } from './ppl-detailed.component';

describe('PplDetailedComponent', () => {
  let component: PplDetailedComponent;
  let fixture: ComponentFixture<PplDetailedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PplDetailedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PplDetailedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
