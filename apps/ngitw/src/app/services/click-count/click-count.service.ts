import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ClickCountService {
  public readonly counter = new BehaviorSubject<number>(0);

  up(): void {
    this.counter.next(this.counter.value + 1);
  }
}
