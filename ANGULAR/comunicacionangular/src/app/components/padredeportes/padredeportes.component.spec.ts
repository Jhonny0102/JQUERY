import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PadredeportesComponent } from './padredeportes.component';

describe('PadredeportesComponent', () => {
  let component: PadredeportesComponent;
  let fixture: ComponentFixture<PadredeportesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PadredeportesComponent]
    });
    fixture = TestBed.createComponent(PadredeportesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
