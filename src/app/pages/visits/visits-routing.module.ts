import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VisitsComponent } from './visits.component';
import { AddVisitComponent } from './add-visit/add-visit.component';

const routes: Routes = [{
  path: '',
  component: VisitsComponent,
  children: [{
    path: 'add-visit',
    component: AddVisitComponent,
  }],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VisitsRoutingModule { }

export const routedComponents = [
  VisitsComponent,
  AddVisitComponent,
];
