import { Component, OnInit } from '@angular/core';
import { PlayerService } from './services/player/player.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {

  hasPlayerName: boolean = false;

  constructor(private playerService: PlayerService) {}

  ngOnInit() {
    this.playerService.playerName$.subscribe((playerName) => {
      this.hasPlayerName = playerName !== null && playerName !== undefined && playerName !== '';
    });

    this.hasPlayerName = this.playerService.getPlayerName() !== null;
  }
}
