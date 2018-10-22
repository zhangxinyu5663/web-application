import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Cchild3Component } from './cchild3.component';

describe('Cchild3Component', () => {
  let component: Cchild3Component;
  let fixture: ComponentFixture<Cchild3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Cchild3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Cchild3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
