import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuilInPipes } from './buil-in-pipes';

describe('BuilInPipes', () => {
  let component: BuilInPipes;
  let fixture: ComponentFixture<BuilInPipes>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BuilInPipes]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuilInPipes);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
