import { Passenger } from "./../../models/passenger.interface";
import { Component, OnInit } from "@angular/core";
import { PassengerDashboardService } from "../../passenger-dashboard.service";
import { Router } from "@angular/router";

@Component({
  selector: "passenger-dashboard",
  styleUrls: ["passenger-dashboard.component.scss"],
  templateUrl: "passenger-dashboard.component.html",
})
export class PassengerDashboardComponent implements OnInit {
  passengers: Passenger[];
  constructor(
    private router: Router,
    private PassengerService: PassengerDashboardService) {}
  ngOnInit() {
    this.PassengerService.getPassengers().subscribe(
      (data: Passenger[]) => (this.passengers = data)
    );
  }

  handleRemove(event: Passenger) {
    this.PassengerService.removePassenger(event)
    .subscribe((data: Passenger) => {
      this.passengers = this.passengers.filter(
        (passenger: Passenger) => passenger.id !== event.id
      );
    })
  }
  handleEdit(event: Passenger) {
    this.PassengerService.updatePassenger(event)
    .subscribe((data: Passenger) => {
      this.passengers = this.passengers.map((passenger: Passenger) => {
        if (passenger.id === event.id) {
          passenger = Object.assign({}, passenger, event);
        }
        return passenger;
      });
    });
  }
  handleView(event: Passenger) {
    this.router.navigate(['/passengers', event.id])
  }
}
