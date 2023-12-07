import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-prizebox',
  templateUrl: './prizebox.component.html',
  styleUrls: ['./prizebox.component.scss']
})
export class PrizeboxComponent {
  @Input() playerName: string | null = null;
}
