import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DobleComponent } from './doble.component';

describe('DobleComponent', () => {
  let component: DobleComponent;
  let fixture: ComponentFixture<DobleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DobleComponent]
    });
    fixture = TestBed.createComponent(DobleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
