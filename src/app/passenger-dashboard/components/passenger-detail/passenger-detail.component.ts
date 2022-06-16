import { Component, Input } from '@angular/core';
import { Passenger } from '../../models/passenger.interface';

@Component({
  selector: 'passenger-detail',
  templateUrl: './passenger-detail.component.html',
  styleUrls: [
    '../../containers/passenger-dashboard/passenger-dashboard.component.scss',
  ],
})
export class PassengerDetailComponent {
  @Input()
  detail: Passenger;
  constractor() {}
}
