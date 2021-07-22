import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PassengerDashboardComponent } from './passenger-dashboard/passenger-dashboard.component'

@NgModule({
    declarations: [
        PassengerDashboardComponent
    ],
    imports: [
        CommonModule
    ],
    exports: [
    PassengerDashboardComponent
    ]
})
export class PassengerDashboardModule {}