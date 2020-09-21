import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Game } from 'src/app/core/model/game.interface';
import { map, filter, toArray, switchMap, tap } from 'rxjs/operators';
import {  selectCart } from 'src/app/redux/cart/index';
import { selectGames } from 'src/app/redux/games';
import { getCurrentUser } from 'src/app/redux/users';
import { retrieveAllGames } from 'src/app/redux/games/games.actions';
import { NgbCarousel, NgbSlideEvent, NgbSlideEventSource } from '@ng-bootstrap/ng-bootstrap';
import { GamesFacadeService } from "../../../games/service/games-facade.service";
import { removeFromCart } from 'src/app/redux/cart/cart.actions';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  games:Game[] =[];
  id:number;
  image:string;
  currentSlide;
  @Output()
  imageSubmitEvent: EventEmitter<string[]> = new EventEmitter();
  @Output()
  idSubmitEvent: EventEmitter<number> = new EventEmitter();
  get cart(): Observable<Game[]> {
    return this.store.pipe(select(selectCart));
  }
  get user(): Observable<string> {
    return this.store.pipe(
      select(getCurrentUser),
      filter(user => !!user),
      map(user => user.name)
    );
  }

  constructor(private store: Store, private service: GamesFacadeService) { 
    this.store.pipe(select(selectGames)).subscribe(games=>
      this.games = games
    )

    }
  ngOnInit(): void {
  }
  paused = false;
  unpauseOnArrow = false;
  pauseOnIndicator = false;
  pauseOnHover = true;
  pauseOnFocus = true;

  @ViewChild('carousel', {static : true}) carousel: NgbCarousel;

  togglePaused() {
    if (this.paused) {
      this.carousel.cycle();
    } else {
      this.carousel.pause();
    }
    this.paused = !this.paused;
  }

  onSlide(slideEvent: NgbSlideEvent) {
    if (this.unpauseOnArrow && slideEvent.paused &&
      (slideEvent.source === NgbSlideEventSource.ARROW_LEFT || slideEvent.source === NgbSlideEventSource.ARROW_RIGHT)) {
      this.togglePaused();
    }
    if (this.pauseOnIndicator && !slideEvent.paused && slideEvent.source === NgbSlideEventSource.INDICATOR) {
      this.togglePaused();
    }
    this.currentSlide=slideEvent.current;
    this.image=this.games[this.currentSlide].img;
    //this.service.changeGame(this.games[this.currentSlide]);
  }
  
  customize(){ 
    this.service.changeImg(this.image);
    this.service.goToEdit(parseInt(this.currentSlide));
   
  }
  removeFromCart(game:Game)
  {
    let id=game.id;
    this.store.dispatch(removeFromCart({id}))
  }

}