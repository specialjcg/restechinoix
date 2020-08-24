import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RestechinoisComponent } from '../restechinois/restechinois.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import {MatDialogModule} from '@angular/material/dialog';
import {ReactiveFormsModule} from '@angular/forms';
import {MatOptionModule} from '@angular/material/core';
import {MatSelectModule} from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';
import {MatChipsModule} from '@angular/material/chips';

@NgModule({
  declarations: [
    AppComponent,
    RestechinoisComponent
  ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        MatInputModule,
        MatDialogModule,
        ReactiveFormsModule,
        MatOptionModule,
        MatSelectModule,
        MatButtonModule,
        MatChipsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
