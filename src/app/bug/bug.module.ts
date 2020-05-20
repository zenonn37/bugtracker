import { BugReportComponent } from './bug-report/bug-report.component';

import { BugDefaultComponent } from './bug-default/bug-default.component';
import { BugRoutingModule } from './bug-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BugComponent } from './bug.component';
import { BugNewComponent } from './bug-new/bug-new.component';
import { BugEditComponent } from './bug-edit/bug-edit.component';

@NgModule({
  declarations: [
    BugComponent,
    BugDefaultComponent,
    BugNewComponent,
    BugEditComponent,
    BugReportComponent,
  ],
  imports: [CommonModule, BugRoutingModule],
})
export class BugModule {}
