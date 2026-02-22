import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AdminLayout } from './admin-layout';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('AdminLayout', () => {
  let component: AdminLayout;
  let fixture: ComponentFixture<AdminLayout>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminLayout, RouterTestingModule],
      schemas: [NO_ERRORS_SCHEMA]
    })
      .compileComponents();

    fixture = TestBed.createComponent(AdminLayout);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
