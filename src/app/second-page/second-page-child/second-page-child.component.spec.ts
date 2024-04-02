import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondPageChildComponent } from './second-page-child.component';

describe('SecondPageChildComponent', () => {
  let component: SecondPageChildComponent;
  let fixture: ComponentFixture<SecondPageChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SecondPageChildComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SecondPageChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
