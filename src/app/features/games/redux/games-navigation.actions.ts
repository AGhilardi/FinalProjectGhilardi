import { createAction, props } from '@ngrx/store';

export const goToGamesHome = createAction('[Games - Navigation] games home');
export const goToDetail = createAction('[Games - Navigation] detail', props<{id: number}>());
export const goToEdit = createAction('[Games - Navigation] edit', props<{id: number}>());
