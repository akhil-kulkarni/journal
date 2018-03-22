import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostMinifiedComponent } from './post-minified.component';

describe('PostMinifiedComponent', () => {
  let component: PostMinifiedComponent;
  let fixture: ComponentFixture<PostMinifiedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostMinifiedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostMinifiedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
