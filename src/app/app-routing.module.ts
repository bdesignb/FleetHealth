import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FleetOverviewComponent } from './fleet-overview/fleet-overview/fleet-overview.component';

const routes: Routes = [
  {path: '', component: FleetOverviewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
