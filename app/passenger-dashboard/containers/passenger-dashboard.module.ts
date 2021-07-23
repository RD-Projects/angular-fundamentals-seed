import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { PassengerCountComponent } from '../components/passenger-count/passenger-count.component';
import { PassengerDetailComponent } from '../components/passenger-detail/passenger-detail.component';
import { PassengerDashboardService } from '../passenger-dashboard.service';
import { PassengerDashboardComponent } from './passenger-dashboard/passenger-dashboard.component'

@NgModule({
    declarations: [
        PassengerDashboardComponent,
        PassengerCountComponent,
        PassengerDetailComponent
    ],
    imports: [
        CommonModule,
        HttpModule
    ],
    exports: [
    PassengerDashboardComponent
    ],
    providers: [
        PassengerDashboardService
    ]
})
export class PassengerDashboardModule {}