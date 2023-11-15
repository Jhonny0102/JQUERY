import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VariasfuncionesComponent } from './variasfunciones.component';

describe('VariasfuncionesComponent', () => {
  let component: VariasfuncionesComponent;
  let fixture: ComponentFixture<VariasfuncionesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VariasfuncionesComponent]
    });
    fixture = TestBed.createComponent(VariasfuncionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
