import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// import { FirstComponent } from './first/first.component';
// import { SecondComponent } from './second/second.component';

const appRoutes: Routes = [
  // { path: 'first', component: FirstComponent },
  // { path: 'second', component: SecondComponent },
];

@NgModule({
  // declarations: [FirstComponent, SecondComponent],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
