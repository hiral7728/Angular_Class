/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ElementssComponent } from './elementss.component';

describe('ElementssComponent', () => {
  let component: ElementssComponent;
  let fixture: ComponentFixture<ElementssComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElementssComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElementssComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
