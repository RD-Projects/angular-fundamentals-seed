import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { Passenger } from './models/passenger.interface';
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'
import 'rxjs/add/observable/throw'

const PASSENGER_API: string = '/api/passengers'
@Injectable()
export class PassengerDashboardService {
    constructor(private http: Http) {
      
    }
        getPassengers(): Observable<Passenger[]> {
            return this.http
            .get(PASSENGER_API)
            .map((response: Response) => response.json())
            .catch((error: any) => Observable.throw(error.json()))
        }
        getPassenger(id: number): Observable<Passenger> {
            return this.http
            .get(`${PASSENGER_API}/${id}`)
            .map((response: Response) => response.json())
            .catch((error: any) => Observable.throw(error.json()))
        }
        updatePassenger(passenger: Passenger): Observable<Passenger> {
            return this.http
            .put(`${PASSENGER_API}/${passenger.id}`, passenger)
            .map((response: Response) => response.json())
            .catch((error: any) => Observable.throw(error.json()))
        }
        removePassenger(passenger: Passenger): Observable<Passenger> {
            return this.http
            .delete(`${PASSENGER_API}/${passenger.id}`)
            .map((response: Response) => response.json())
            .catch((error: any) => Observable.throw(error.json()))
        }
}