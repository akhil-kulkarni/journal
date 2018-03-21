import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JnlHeaderComponent } from './jnl-header.component';

describe('JnlHeaderComponent', () => {
  let component: JnlHeaderComponent;
  let fixture: ComponentFixture<JnlHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JnlHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JnlHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
