import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BigHeadComponent } from './big-head.component';

describe('BigHeadComponent', () => {
  let component: BigHeadComponent;
  let fixture: ComponentFixture<BigHeadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BigHeadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BigHeadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
