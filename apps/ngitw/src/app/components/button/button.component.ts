import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ClickCountService } from '../../services/click-count/click-count.service';

@Component({
  selector: 'ngitw-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class ButtonComponent {
  count$: Observable<number>;

  constructor(private readonly click: ClickCountService) {
    this.count$ = this.click.counter;
  }

  onClick(): void {
    this.click.up();
  }
}
