import { Component, OnInit, VERSION } from '@angular/core';
import { Passenger } from '../../models/passenger.interface';

@Component({
  selector: 'passenger-dashboard',
  templateUrl: './passenger-dashboard.component.html',
  styleUrls: ['./passenger-dashboard.component.scss'],
})
export class PassengerDashboardComponent implements OnInit {
  private passengers: Passenger[];
  constructor() {}
  ngOnInit() {
    console.log('onInit');
    this.passengers = [
      {
        id: 1,
        fullname: 'ali1',
        checkedIn: true,
        checkedInDate: 1490742000000,
        children: [
          { name: 'Jack', age: 10 },
          { name: 'Nana', age: 5 },
        ],
      },
      {
        id: 2,
        fullname: 'ali2',
        checkedIn: false,
        checkedInDate: null,
        children: null,
      },
      {
        id: 3,
        fullname: 'ali3',
        checkedIn: true,
        checkedInDate: 1491606000000,
        children: [
          { name: 'Jason', age: 12 },
          { name: 'Roben', age: 7 },
        ],
      },
      {
        id: 4,
        fullname: 'ali4',
        checkedIn: false,
        checkedInDate: null,
        children: null,
      },
    ];
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
}
