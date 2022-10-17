import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, of, switchMap, map } from 'rxjs';
import { PopularTagType } from 'src/app/shared/types/popularTag.type';
import { PopularTagsService } from 'src/app/shared/modules/popularTags/services/popularTags.service';
import {
  getPopularTagsAction,
  getPopularTagsFailureAction,
  getPopularTagsSuccessAction,
} from '../actions/getPopularTags.action';

@Injectable()
export class GetPopularTagsEffect {
  getPopularTags$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getPopularTagsAction),
      switchMap(() => {
        return this.popularTagsService.getPopularTags().pipe(
          map((popularTags: PopularTagType[]) => {
            return getPopularTagsSuccessAction({ popularTags });
          }),

          catchError(() => {
            return of(getPopularTagsFailureAction());
          })
        );
      })
    )
  );
  constructor(
    private actions$: Actions,
    private popularTagsService: PopularTagsService
  ) {}
}
