import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StructutalDirective } from './structutal-directive';

describe('StructutalDirective', () => {
  let component: StructutalDirective;
  let fixture: ComponentFixture<StructutalDirective>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StructutalDirective]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StructutalDirective);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
