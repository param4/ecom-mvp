import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeTopCategoriesComponent } from './home-top-categories.component';

describe('HomeTopCategoriesComponent', () => {
  let component: HomeTopCategoriesComponent;
  let fixture: ComponentFixture<HomeTopCategoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeTopCategoriesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeTopCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
