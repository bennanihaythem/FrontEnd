import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListDevopsComponent } from './list-devops.component';

describe('ListDevopsComponent', () => {
  let component: ListDevopsComponent;
  let fixture: ComponentFixture<ListDevopsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListDevopsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListDevopsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
