import { Baggage } from './../../models/baggage.interface';
import { Passenger } from './../../models/passenger.interface';
import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
    selector: 'passenger-form',
    styleUrls: ['passenger-form.component.scss'],
    templateUrl: 'passenger-form.component.html'
})

export class PassengerFormComponent {
    @Input()
    detail: Passenger
    @Output()
    update: EventEmitter<Passenger> = new EventEmitter<Passenger>()

    baggage: Baggage[] = [{
        key: 'none',
        value: 'No baggage'
    },{
        key: 'hand-only',
        value: 'Hand baggage'
    },{
        key: 'hold-only',
        value: 'Hold baggage'
    }]

    toggleCheckIn(checkedIn: boolean){
        if (checkedIn) {
            this.detail.checkInDate = Date.now();
        }
    }
    handleSubmit(passenger: Passenger, isValid: boolean) {
        if(isValid) {
            this.update.emit(passenger)
        }
    }
}