/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { GenericComponent } from './generic.component';

describe('GenericComponent', () => {
  let component: GenericComponent;
  let fixture: ComponentFixture<GenericComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenericComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenericComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
