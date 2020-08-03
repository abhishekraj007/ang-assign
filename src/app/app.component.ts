import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <nav
      class="navbar navbar-expand navbar-dark bg-dark justify-content-between p-3"
    >
      <a class="navbar-brand" [routerLink]="['/']">{{ pageTitle }}</a>
      <ul class="nav nav-pills">
        <li>
          <a
            class="nav-link"
            routerLinkActive="active"
            [routerLink]="['/practice1']"
            >Practice1</a
          >
        </li>
        <li>
          <a
            class="nav-link"
            routerLinkActive="active"
            [routerLink]="['/practice2']"
            >Practice2</a
          >
        </li>
        <li>
          <a
            class="nav-link"
            routerLinkActive="active"
            [routerLink]="['/practice3']"
            >Practice3</a
          >
        </li>
        <li>
          <a
            class="nav-link"
            routerLinkActive="active"
            [routerLink]="['/practice4']"
            >Practice4</a
          >
        </li>
      </ul>
    </nav>
    <div class="container-fulid p-3">
      <router-outlet></router-outlet>
    </div>
  `,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  pageTitle = 'Our Logo';
  // pageTitle = 'Our Logo';
}
