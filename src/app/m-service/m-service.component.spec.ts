import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MServiceComponent } from './m-service.component';

describe('MServiceComponent', () => {
  let component: MServiceComponent;
  let fixture: ComponentFixture<MServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MServiceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
