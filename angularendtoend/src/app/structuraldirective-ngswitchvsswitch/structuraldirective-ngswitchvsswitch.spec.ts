import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StructuraldirectiveNgswitchvsswitch } from './structuraldirective-ngswitchvsswitch';

describe('StructuraldirectiveNgswitchvsswitch', () => {
  let component: StructuraldirectiveNgswitchvsswitch;
  let fixture: ComponentFixture<StructuraldirectiveNgswitchvsswitch>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StructuraldirectiveNgswitchvsswitch]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StructuraldirectiveNgswitchvsswitch);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
