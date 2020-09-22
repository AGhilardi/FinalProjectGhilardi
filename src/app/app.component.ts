import { Component } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Game } from './core/model/game.interface';
import { selectCart } from './redux/cart';
import { initCart } from './redux/cart/cart.actions';
import { retrieveAllGames } from './redux/games/games.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'FinalGhilardi';
  //cartinit:Game[];
  constructor(private store: Store) {
  }

  ngOnInit(): void {
    /*this.store.pipe(select(selectCart)).subscribe(cart=>this.cartinit=cart)
    let currentCart= this.cartinit
    this.store.dispatch(initCart({currentCart}))*/
    this.store.dispatch(retrieveAllGames());
    
  }


}
