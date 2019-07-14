import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageModuleComponent } from './message-module.component';

describe('MessageModuleComponent', () => {
  let component: MessageModuleComponent;
  let fixture: ComponentFixture<MessageModuleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MessageModuleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessageModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
