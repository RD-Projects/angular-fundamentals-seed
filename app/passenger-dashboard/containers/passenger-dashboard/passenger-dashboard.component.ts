import { Passenger } from './../../models/passenger.interface';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'passenger-dashboard',
    styleUrls: ['passenger-dashboard.component.scss'],
    templateUrl: 'passenger-dashboard.component.html'
})

export class PassengerDashboardComponent implements OnInit {
    passengers: Passenger[] 
    constructor() {}
    ngOnInit() {
      this.passengers = [{
        id: 1,
        fullname: 'Rhyan',
        checkedIn: true,
        checkInDate: 1490742000000,
        children: [{name: 'Minae', age: 1}]
      },{
        id: 3,
        fullname: 'Vera',
        checkedIn: false,
        checkInDate: 1490742000000,
        children: [{name: 'Minae', age: 1}]
      },{
        id: 3,
        fullname: 'Minae',
        checkedIn: true,
        checkInDate: 1490742000000,
        children: null
      }]
    }
}