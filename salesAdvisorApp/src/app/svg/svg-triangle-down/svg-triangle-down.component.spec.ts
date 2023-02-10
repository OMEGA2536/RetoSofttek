import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SvgTriangleDownComponent } from './svg-triangle-down.component';

describe('SvgTriangleDownComponent', () => {
  let component: SvgTriangleDownComponent;
  let fixture: ComponentFixture<SvgTriangleDownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SvgTriangleDownComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SvgTriangleDownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
