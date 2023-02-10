import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SvgSettingComponent } from './svg-setting.component';

describe('SvgSettingComponent', () => {
  let component: SvgSettingComponent;
  let fixture: ComponentFixture<SvgSettingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SvgSettingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SvgSettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
