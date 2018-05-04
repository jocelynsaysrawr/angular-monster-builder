import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftArmComponent } from './left-arm.component';

describe('LeftArmComponent', () => {
  let component: LeftArmComponent;
  let fixture: ComponentFixture<LeftArmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeftArmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeftArmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
