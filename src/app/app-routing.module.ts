import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DocViewerComponent } from './doc-viewer/doc-viewer.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  {

    path: 'doc/layout',
    component: AppComponent,
    children: [
      { path: 'docviewer',component: DocViewerComponent },
      { path: 'docviewer/:docId',component: DocViewerComponent },
      { path: 'docviewer/:docId/:p_code',component: DocViewerComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
