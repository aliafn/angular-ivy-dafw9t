import { Component, OnInit, VERSION } from '@angular/core';
import { Passenger } from '../../models/passenger.interface';
import { PassnegerDashboardService } from '../../passenger-dashboard.service';

@Component({
  selector: 'passenger-dashboard',
  templateUrl: './passenger-dashboard.component.html',
  styleUrls: [
    './passenger-dashboard.component.scss',
    '../../../app.component.scss',
  ],
})
export class PassengerDashboardComponent implements OnInit {
  private passengers: Passenger[];
  constructor(private passengerService: PassnegerDashboardService) {}
  ngOnInit() {
    this.passengerService.getPassengers().subscribe((data: Passenger[]) => {
      this.passengers = data;
    });
  }

  getPassengers() {
    return this.passengers;
  }

  name = 'Angular ' + VERSION.major;
  agent = 'Ali';
  cust: number = 1000;
  age: number;

  handleBlur(event: any) {
    this.agent = event.target.value;
  }

  handleInput(event: any) {
    this.agent = event.target.value;
  }

  handleClick() {
    this.name = 'Angular ' + VERSION.major;
    this.agent = 'Ali';
  }

  handleChange(value: string) {
    this.name = value;
  }

  handleChangeAge(value1: string) {
    this.age = Number(value1);
  }

  handleRemove(event: Passenger) {
    this.passengers = this.passengers.filter((passenger: Passenger) => {
      return passenger.id != event.id;
    });
  }

  handleEdit(event: Passenger) {
    this.passengers = this.passengers.map((passenger: Passenger) => {
      if (passenger.id === event.id) {
        passenger = Object.assign({}, passenger, event);
      }
      return passenger;
    });
  }
}
