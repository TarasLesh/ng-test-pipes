import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'test-ng-lesson3';

  myClass: boolean;
  colorRed = 'red';

  toggleClass() {
    this.myClass = !this.myClass;
  }
}
