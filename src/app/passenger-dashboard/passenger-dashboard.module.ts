import { CommonModule } from '@angular/common';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PassengerCountComponent } from './components/passenger-count/passenger-count.component';
import { PassengerDetailComponent } from './components/passenger-detail/passenger-detail.component';
import { PassengerDashboardComponent } from './containers/passenger-dashboard/passenger-dashboard.component';
import { PassnegerDashboardService } from './passenger-dashboard.service';
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    PassengerDashboardComponent,
    PassengerDetailComponent,
    PassengerCountComponent,
  ],
  imports: [CommonModule, FormsModule, HttpModule],
  exports: [PassengerDashboardComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [PassnegerDashboardService],
})
export class PassengerDashboardModule {}
