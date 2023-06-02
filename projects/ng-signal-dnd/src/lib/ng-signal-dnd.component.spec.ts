import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgSignalDndComponent } from './ng-signal-dnd.component';

describe('NgSignalDndComponent', () => {
  let component: NgSignalDndComponent;
  let fixture: ComponentFixture<NgSignalDndComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NgSignalDndComponent]
    });
    fixture = TestBed.createComponent(NgSignalDndComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
