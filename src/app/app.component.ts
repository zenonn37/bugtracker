import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public menu: Boolean = false;
  public toState = 'state1';
  //methods
  //logout clear credentials and send to login screen

  public exitSession() {}

  public menuControl() {
    this.menu = !this.menu;
    this.toState = this.menu ? 'state2' : 'state1';
    console.log(this.menu);
    console.log(this.toState);

    console.log('pushed');
  }
}
