import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ClickCountService } from '../../services/click-count/click-count.service';

@Component({
  selector: 'ngitw-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class ButtonComponent implements OnInit, OnDestroy {
  count = 0;
  sub = new Subscription();

  constructor(private readonly click: ClickCountService) {
    //
  }

  onClick(): void {
    this.click.up();
  }

  ngOnInit(): void {
    this.sub.add(this.click.counter.subscribe((value) => (this.count = value)));
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
