import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerAgremiadosComponent } from './ver-agremiados.component';

describe('VerAgremiadosComponent', () => {
  let component: VerAgremiadosComponent;
  let fixture: ComponentFixture<VerAgremiadosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VerAgremiadosComponent]
    });
    fixture = TestBed.createComponent(VerAgremiadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
