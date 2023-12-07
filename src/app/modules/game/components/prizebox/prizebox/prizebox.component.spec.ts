import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrizeboxComponent } from './prizebox.component';

describe('PrizeboxComponent', () => {
  let component: PrizeboxComponent;
  let fixture: ComponentFixture<PrizeboxComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PrizeboxComponent]
    });
    fixture = TestBed.createComponent(PrizeboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
