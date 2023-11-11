import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinhaListComponent } from './linha-list.component';

describe('LinhaListComponent', () => {
  let component: LinhaListComponent;
  let fixture: ComponentFixture<LinhaListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LinhaListComponent]
    });
    fixture = TestBed.createComponent(LinhaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
