import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Passenger } from '../../models/passenger.interface';

@Component({
  selector: 'passenger-detail',
  templateUrl: './passenger-detail.component.html',
  styleUrls: [
    '../../containers/passenger-dashboard/passenger-dashboard.component.scss',
    '../../../app.component.scss',
  ],
})
export class PassengerDetailComponent {
  @Input()
  detail: Passenger;

  editing: boolean = false;

  @Output()
  remove: EventEmitter<any> = new EventEmitter();

  constractor() {}

  onNameChange(value: string) {
    this.detail.fullname = value;
  }
  toggleEdit() {
    this.editing = !this.editing;
  }
  onRemove() {
    this.remove.emit(this.detail);
  }
}
