import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainernameComponent } from './containername.component';

describe('ContainernameComponent', () => {
  let component: ContainernameComponent;
  let fixture: ComponentFixture<ContainernameComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContainernameComponent]
    });
    fixture = TestBed.createComponent(ContainernameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
