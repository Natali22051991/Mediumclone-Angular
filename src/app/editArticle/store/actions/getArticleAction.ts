import { createAction, props } from '@ngrx/store';
import { ArticleInterface } from 'src/app/shared/types/article.interface';
import { ActionTypes } from 'src/app/editArticle/store/actionTypes';

export const getArticleAction = createAction(
  ActionTypes.GET_ARTICLE,
  props<{ slug: string }>()
);

export const getArticleSuccessAction = createAction(
  ActionTypes.GET_ARTICLE_SUCCESS,
  props<{ article: ArticleInterface }>()
);

export const getArticleFailureAction = createAction(
  ActionTypes.GET_ARTICLE_FAILURE
);
