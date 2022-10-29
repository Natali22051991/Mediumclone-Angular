import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { map, catchError, switchMap, tap } from 'rxjs/operators';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { of } from 'rxjs';

import { ArticleInterface } from 'src/app/shared/types/article.interface';
import { EditArticleService } from 'src/app/editArticle/services/editArticle.service';
import {
  updateArticleSuccessAction,
  updateArticleAction,
  updateArticleFailureAction,
} from 'src/app/editArticle/store/actions/updateArticle.action';

@Injectable()
export class UpdateArticleEffect {
  updateArticle$ = createEffect(() =>
    this.actions$.pipe(
      ofType(updateArticleAction),
      switchMap(({ slug, articleInput }) => {
        return this.editArticleService.updateArticle(slug, articleInput).pipe(
          map((article: ArticleInterface) => {
            return updateArticleSuccessAction({ article });
          }),

          catchError((errorResponse: HttpErrorResponse) => {
            return of(
              updateArticleFailureAction({ errors: errorResponse.error.errors })
            );
          })
        );
      })
    )
  );

  redirectAfterUpdate$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(updateArticleSuccessAction),
        tap(({ article }) => {
          this.router.navigate(['/articles', article.slug]);
        })
      ),
    { dispatch: false }
  );

  constructor(
    private actions$: Actions,
    private editArticleService: EditArticleService,
    private router: Router
  ) {}
}
