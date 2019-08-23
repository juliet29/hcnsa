import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GalaComponent } from './gala.component';

describe('GalaComponent', () => {
  let component: GalaComponent;
  let fixture: ComponentFixture<GalaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GalaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GalaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
