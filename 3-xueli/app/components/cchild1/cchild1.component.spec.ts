import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Cchild1Component } from './cchild1.component';

describe('Cchild1Component', () => {
  let component: Cchild1Component;
  let fixture: ComponentFixture<Cchild1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Cchild1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Cchild1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
