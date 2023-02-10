import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SvgPowerComponent } from './svg-power.component';

describe('SvgPowerComponent', () => {
  let component: SvgPowerComponent;
  let fixture: ComponentFixture<SvgPowerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SvgPowerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SvgPowerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
