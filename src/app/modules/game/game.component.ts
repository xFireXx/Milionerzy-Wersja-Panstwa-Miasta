import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { PlayerService } from './services/player/player.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {

  hasPlayerName: boolean = false;
  playerName: string | null = '';

  constructor(private playerService: PlayerService) {}

  ngOnInit() {
    this.playerService.playerName$.subscribe((playerName) => {
      this.hasPlayerName = playerName !== null && playerName !== undefined && playerName !== '';
      this.playerName = playerName;
    });

    this.hasPlayerName = this.playerService.getPlayerName() !== null;
    this.playerName = this.playerService.getPlayerName();
  }
}

