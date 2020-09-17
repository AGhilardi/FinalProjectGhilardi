import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { retrieveAllGames } from './redux/games/games.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'FinalGhilardi';
  
  constructor(private store: Store) {

  }

  ngOnInit(): void {
    this.store.dispatch(retrieveAllGames());
  }


}
