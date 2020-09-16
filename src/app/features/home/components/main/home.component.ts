import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import { Game } from 'src/app/core/model/game.interface';
import { map, filter } from 'rxjs/operators';
import { getFirstGame } from 'src/app/redux/games';
import { getCurrentUser } from 'src/app/redux/users';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  get game(): Observable<Game>{
    return this.store.pipe(select(getFirstGame));
  }

  get user(): Observable<string> {
    return this.store.pipe(
      select(getCurrentUser),
      filter(user => !!user),
      map(user => user.name)
    );
  }

  constructor(private store: Store) { 
  }

  ngOnInit(): void {
  }

}