import { createAction, props } from '@ngrx/store';
import { ArticleInterface } from 'src/app/shared/types/article.interface';
import { ArticleInputInterface } from 'src/app/shared/types/articleInput.interface';
import { BackendErrorsInterface } from 'src/app/shared/types/backendErrors.interface';
import { ActionTypes } from 'src/app/editArticle/store/actionTypes';

export const updateArticleAction = createAction(
  ActionTypes.UPDATE_ARTICLE,
  props<{ slug: string; articleInput: ArticleInputInterface }>()
);

export const updateArticleSuccessAction = createAction(
  ActionTypes.UPDATE_ARTICLE_SUCCESS,
  props<{ article: ArticleInterface }>()
);

export const updateArticleFailureAction = createAction(
  ActionTypes.UPDATE_ARTICLE_FAILURE,
  props<{ errors: BackendErrorsInterface }>()
);
