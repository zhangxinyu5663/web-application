import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Cchild4Component } from './cchild4.component';

describe('Cchild4Component', () => {
  let component: Cchild4Component;
  let fixture: ComponentFixture<Cchild4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Cchild4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Cchild4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
