import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatToolbarModule} from '@angular/material/toolbar';

import {MatTabsModule} from '@angular/material/tabs';

import {MatInputModule} from '@angular/material/input';

import {MatListModule} from '@angular/material/list';

import {MatSelectModule} from '@angular/material/select';

import {MatDatepickerModule} from '@angular/material/datepicker';

import {MatNativeDateModule} from '@angular/material/core';

import {MatButtonModule} from '@angular/material/button';

import {MatTableModule} from '@angular/material/table';



import { BookingComponent } from './booking/booking.component';

import { PassengerdetailsComponent } from './passengerdetails/passengerdetails.component';





@NgModule({
  declarations: [
    AppComponent,
    BookingComponent,
    PassengerdetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatTabsModule,
    MatInputModule,
    MatListModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
