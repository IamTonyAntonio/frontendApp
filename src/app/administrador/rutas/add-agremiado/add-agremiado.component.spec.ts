import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAgremiadoComponent } from './add-agremiado.component';

describe('AddAgremiadoComponent', () => {
  let component: AddAgremiadoComponent;
  let fixture: ComponentFixture<AddAgremiadoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddAgremiadoComponent]
    });
    fixture = TestBed.createComponent(AddAgremiadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
