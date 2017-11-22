import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TranslateSiteComponent } from './translate-site.component';

describe('TranslateSiteComponent', () => {
  let component: TranslateSiteComponent;
  let fixture: ComponentFixture<TranslateSiteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TranslateSiteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TranslateSiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
