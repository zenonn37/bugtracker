import { BugReportComponent } from './bug-report/bug-report.component';
import { BugComponent } from './bug.component';
import { BugDefaultComponent } from './bug-default/bug-default.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { BugNewComponent } from './bug-new/bug-new.component';
import { BugEditComponent } from './bug-edit/bug-edit.component';

const routes: Routes = [
  {
    path: 'tracker',
    component: BugComponent,
    children: [
      { path: '', component: BugDefaultComponent },
      { path: 'new', component: BugNewComponent },
      { path: 'edit', component: BugEditComponent },
      { path: 'report', component: BugReportComponent },
    ],
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BugRoutingModule {}
