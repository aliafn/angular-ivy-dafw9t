import { Component, Input } from '@angular/core';
import { Passenger } from '../../models/passenger.interface';

@Component({
  selector: 'passenger-count',
  templateUrl: './passenger-count.component.html',
})
export class PassengerCountComponent {
  @Input()
  items: Passenger[];
  constractor() {}
  checkedInCount(): number {
    if (!this.items) {
      return;
    } else {
      return this.items.filter((passenger: Passenger) => {
        return passenger.checkedIn;
      }).length;
    }
  }
}
