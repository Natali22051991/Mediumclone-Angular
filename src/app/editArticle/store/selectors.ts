import { createFeatureSelector, createSelector } from '@ngrx/store';
import { EditArticleStateInterface } from 'src/app/editArticle/types/editArticleState.interface';

export const editArticleFeatureSelector =
  createFeatureSelector<EditArticleStateInterface>('editArticle');

export const articleSelector = createSelector(
  editArticleFeatureSelector,
  (editArticleState: EditArticleStateInterface) => editArticleState.article
);

export const isLoadingSelector = createSelector(
  editArticleFeatureSelector,
  (editArticleState: EditArticleStateInterface) => editArticleState.isLoading
);

export const isSubmittingSelector = createSelector(
  editArticleFeatureSelector,
  (editArticleState: EditArticleStateInterface) => editArticleState.isSubmitting
);

export const validationErrorsSelector = createSelector(
  editArticleFeatureSelector,
  (editArticleState: EditArticleStateInterface) =>
    editArticleState.validationErrors
);
