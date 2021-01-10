import { Component } from '@angular/core';
import { formatDate} from '@angular/common';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // selector:'students',
    template: `
    <p *ngFor="let student of students">
    {{students.firstName}}
  </p>

  <div>

  <p>{{now|date: "short"}}</p>
  
  </div>
`

})
export class AppComponent {
  title = 'my-app';
  students = [{firstName:"shahd", age:20},
  {firstName:"a", age:23},
  {firstName:"b", age:14}
];

    now = new Date();
    nowFormatted: string;
    constructor() {
    this.nowFormatted = formatDate(this.now, 'yyyy', 'en-US');
   }
// addNew() {
//   this.students.push({age: 30, firstName: "madhoun"});
//   console.log(this.students);

// }
}

