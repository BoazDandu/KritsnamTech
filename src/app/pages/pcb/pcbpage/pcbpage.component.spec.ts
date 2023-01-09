import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PcbpageComponent } from './pcbpage.component';

describe('PcbpageComponent', () => {
  let component: PcbpageComponent;
  let fixture: ComponentFixture<PcbpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PcbpageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PcbpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
