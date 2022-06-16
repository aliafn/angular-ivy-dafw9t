import { Passenger } from './models/passenger.interface';

export class PassnegerDashboardService {
  constructor() {}

  getPassengers(): Passenger[] {
    return [
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
}
