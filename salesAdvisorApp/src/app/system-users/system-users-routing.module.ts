import { SalesAdvisorComponent } from './sales-advisor/sales-advisor.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  
  {
    path: 'candidate/my-data',
    component: SalesAdvisorComponent,
    data: {
      section: 'CandidateMyData'
    }
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SystemUsersRoutingModule { }
