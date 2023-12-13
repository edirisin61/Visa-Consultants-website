import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavVisaComponent } from './nav-visa.component';

describe('NavVisaComponent', () => {
  let component: NavVisaComponent;
  let fixture: ComponentFixture<NavVisaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NavVisaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NavVisaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
