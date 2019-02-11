import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModCompProyComponent } from './mod-comp-proy.component';

describe('ModCompProyComponent', () => {
  let component: ModCompProyComponent;
  let fixture: ComponentFixture<ModCompProyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModCompProyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModCompProyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
