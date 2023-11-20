import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RealizarcomprasComponent } from './realizarcompras.component';

describe('RealizarcomprasComponent', () => {
  let component: RealizarcomprasComponent;
  let fixture: ComponentFixture<RealizarcomprasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RealizarcomprasComponent]
    });
    fixture = TestBed.createComponent(RealizarcomprasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
