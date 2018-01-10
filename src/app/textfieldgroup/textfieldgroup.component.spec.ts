import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TextfieldgroupComponent } from './textfieldgroup.component';

describe('TextfieldgroupComponent', () => {
  let component: TextfieldgroupComponent;
  let fixture: ComponentFixture<TextfieldgroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TextfieldgroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TextfieldgroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
