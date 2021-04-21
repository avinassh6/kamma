/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PosteventsComponent } from './postevents.component';

describe('PosteventsComponent', () => {
  let component: PosteventsComponent;
  let fixture: ComponentFixture<PosteventsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PosteventsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PosteventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
