import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
      <app-ng-style></app-ng-style>

<hr>

<app-css></app-css>

<p>
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore eos rem blanditiis ut aliquam laborum? Consequatur delectus sequi aperiam esse cumque ea laboriosam, quia voluptas quos incidunt, ratione dicta numquam?
</p>

<hr>

<app-clases></app-clases>

<hr>

<h3 [appResaltado]="'red'">
  Directiva personalizada
</h3>

<hr>

<app-ng-switch></app-ng-switch>
  `,
  styles: []
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
