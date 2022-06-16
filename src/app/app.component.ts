import { Component, VERSION } from '@angular/core';

interface Passenger {
  id: number;
  fullname: string;
  checkedIn: boolean;
}

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  private passengers: Passenger[] = [
    {
      id: 1,
      fullname: 'ali1',
      checkedIn: true,
    },
    {
      id: 2,
      fullname: 'ali2',
      checkedIn: false,
    },
    {
      id: 3,
      fullname: 'ali3',
      checkedIn: true,
    },
    {
      id: 4,
      fullname: 'ali4',
      checkedIn: false,
    },
  ];

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
