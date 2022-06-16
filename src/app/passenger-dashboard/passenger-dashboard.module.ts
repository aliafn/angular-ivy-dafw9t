import { CommonModule } from '@angular/common';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { PassengerDashboardComponent } from './containers/passenger-dashboard/passenger-dashboard.component';

@NgModule({
  declarations: [PassengerDashboardComponent],
  imports: [CommonModule, FormsModule],
  exports: [PassengerDashboardComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class PassengerDashboardModule {}
