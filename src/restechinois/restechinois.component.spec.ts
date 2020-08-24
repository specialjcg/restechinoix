import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {RestechinoisComponent} from './restechinois.component';
import {ListChinois} from './listChinois';
import {BrowserModule, By} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import {MatDialogModule} from '@angular/material/dialog';
import {ReactiveFormsModule} from '@angular/forms';
import {MatOptionModule} from '@angular/material/core';
import {MatSelectModule} from '@angular/material/select';
import {MatChipsModule} from '@angular/material/chips';

describe('RestechinoisComponent', () => {
  let component: RestechinoisComponent;
  let fixture: ComponentFixture<RestechinoisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RestechinoisComponent],
      imports: [
        BrowserModule,
        BrowserAnimationsModule,
        MatInputModule,
        MatDialogModule,
        ReactiveFormsModule,
        MatOptionModule,
        MatSelectModule,
        MatChipsModule
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestechinoisComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should be create a list of congruences formulation', () => {
    const compiled = fixture.debugElement.nativeElement.querySelector('input[name="reste"]');
    component.list.push(ListChinois.builder().reste(5).modulo(17).build());
    compiled.value = component.list.list[component.list.list.length - 1].reste;
    fixture.detectChanges();
    expect(compiled.value).toEqual('5');

  });
});
