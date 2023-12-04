import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  private playerNameSubject = new BehaviorSubject<string | null>(null);

  playerName$ = this.playerNameSubject.asObservable();

  getPlayerName(): string | null {
    return localStorage.getItem('playerName');
  }

  setPlayerName(playerName: string): void {
    localStorage.setItem('playerName', playerName);
    this.playerNameSubject.next(playerName);
  }
}
