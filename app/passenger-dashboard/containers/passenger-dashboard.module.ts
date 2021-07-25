import { FormsModule } from '@angular/forms';
import { PassengerFormComponent } from './../components/passenger-form/passenger-form.component';
import { PassengerViewerComponent } from './passenger-viewer/passenger-viewer.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { PassengerCountComponent } from '../components/passenger-count/passenger-count.component';
import { PassengerDetailComponent } from '../components/passenger-detail/passenger-detail.component';
import { PassengerDashboardService } from '../passenger-dashboard.service';
import { PassengerDashboardComponent } from './passenger-dashboard/passenger-dashboard.component'
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [ 
    {
        path: 'passengers',
        children: [
            { path: '', component: PassengerDashboardComponent },
            { path: ':id', component: PassengerViewerComponent}
        ]
    }
]
@NgModule({
    declarations: [
        PassengerDashboardComponent,
        PassengerCountComponent,
        PassengerDetailComponent,
        PassengerViewerComponent,
        PassengerFormComponent
    ],
    imports: [
        CommonModule,
        HttpModule,
        FormsModule,
        RouterModule.forChild(routes)
    ],
    exports: [
    PassengerViewerComponent
    ],
    providers: [
        PassengerDashboardService
    ]
})
export class PassengerDashboardModule {}