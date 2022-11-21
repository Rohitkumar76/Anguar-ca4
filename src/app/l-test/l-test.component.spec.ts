import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LTestComponent } from './l-test.component';

describe('LTestComponent', () => {
  let component: LTestComponent;
  let fixture: ComponentFixture<LTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LTestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
