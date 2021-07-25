import { ActivatedRoute, Params, Router } from '@angular/router';
import { Passenger } from "./../../models/passenger.interface";
import { Component, OnInit } from "@angular/core";
import { PassengerDashboardService } from "../../passenger-dashboard.service";
import 'rxjs/add/operator/switchMap'

@Component({
  selector: "passenger-viewer",
  styleUrls: ["passenger-viewer.component.scss"],
  template: `<div>
  <button (click)="goBack()">&lsaquo; Go back</button>
    <passenger-form
      [detail]="passenger"
      (update)="onUpdatePassenger($event)"
    ></passenger-form>
  </div> `,
})
export class PassengerViewerComponent implements OnInit {
  passenger: Passenger;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private PassengerService: PassengerDashboardService) {}
  ngOnInit() {
    this.route.params
    .switchMap((data: Passenger) => this.PassengerService.getPassenger(data.id))
    .subscribe(
      (data: Passenger) => (this.passenger = data)
    );
  }
  onUpdatePassenger(event: Passenger) {
    this.PassengerService.updatePassenger(event).subscribe(
      (data: Passenger) => {
        this.passenger = Object.assign({}, this.passenger, event);
      }
    );
  }
  goBack() {
    this.router.navigate(['/passengers'])
  }
}
