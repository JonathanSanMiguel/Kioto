import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KiotoComponent } from './kioto.component';

describe('KiotoComponent', () => {
  let component: KiotoComponent;
  let fixture: ComponentFixture<KiotoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KiotoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KiotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
