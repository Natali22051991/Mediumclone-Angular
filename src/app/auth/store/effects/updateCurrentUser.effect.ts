import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, of, switchMap, map, tap } from 'rxjs';
import { CurrentUserInterface } from 'src/app/shared/types/currentUser.interface';
import { AuthService } from 'src/app/auth/services/auth.service';
import {
  updateCurrentUserAction,
  updateCurrentUserFailureAction,
  updateCurrentUserSuccessAction,
} from 'src/app/auth/store/actions/updateCurrentUser.action';

@Injectable()
export class UpdateCurrentUserEffect {
  updateCurrentUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(updateCurrentUserAction),
      switchMap(({ currentUserInput }) => {
        return this.authService.updateCurrentUser(currentUserInput).pipe(
          map((currentUser: CurrentUserInterface) => {
            return updateCurrentUserSuccessAction({ currentUser });
          }),
          catchError((errorResponse: HttpErrorResponse) => {
            return of(
              updateCurrentUserFailureAction({
                errors: errorResponse.error.errors,
              })
            );
          })
        );
      })
    )
  );

  constructor(private actions$: Actions, private authService: AuthService) {}
}
