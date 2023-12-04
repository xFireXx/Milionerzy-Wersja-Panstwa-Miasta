import { Component} from '@angular/core';
import { PlayerService } from '../../services/player/player.service';

@Component({
  selector: 'app-containername',
  templateUrl: './containername.component.html',
  styleUrls: ['./containername.component.scss']
})
export class ContainernameComponent {

  name = '';

  constructor(private playerService: PlayerService) {}

  saveNameToLocalStorage() {
    this.playerService.setPlayerName(this.name);
  }
}
