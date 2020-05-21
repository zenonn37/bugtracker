import { Component, OnInit, Input } from '@angular/core';
import {
  trigger,
  style,
  state,
  transition,
  animate,
} from '@angular/animations';

@Component({
  selector: 'app-mobile-nav',
  templateUrl: './mobile-nav.component.html',
  styleUrls: ['./mobile-nav.component.scss'],
  animations: [
    trigger('changeState', [
      state('state1', style({})),
      state(
        'state2',
        style({
          transform: 'translateX(-120px)',
        })
      ),
      transition('*=>state1', animate('200ms')),
      transition('*=>state2', animate('200ms')),
    ]),
  ],
})
export class MobileNavComponent implements OnInit {
  @Input() currentState;

  constructor() {}

  ngOnInit(): void {}
}
