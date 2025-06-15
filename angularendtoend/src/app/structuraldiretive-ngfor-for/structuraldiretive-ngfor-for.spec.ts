import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StructuraldiretiveNgforFor } from './structuraldiretive-ngfor-for';

describe('StructuraldiretiveNgforFor', () => {
  let component: StructuraldiretiveNgforFor;
  let fixture: ComponentFixture<StructuraldiretiveNgforFor>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StructuraldiretiveNgforFor]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StructuraldiretiveNgforFor);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
