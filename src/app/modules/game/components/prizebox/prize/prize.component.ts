import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-prize',
  templateUrl: './prize.component.html',
  styleUrls: ['./prize.component.scss']
})
export class PrizeComponent {
  @Input() prize: string | null = null;
  @Input() prizeClass: string = 'p-3 bg-blue-400 mt-5 text-center flex justify-center';
}
