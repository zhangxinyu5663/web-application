import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Cchild5Component } from './cchild5.component';

describe('Cchild5Component', () => {
  let component: Cchild5Component;
  let fixture: ComponentFixture<Cchild5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Cchild5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Cchild5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
