import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppStateInterface } from 'src/app/shared/types/appState.interface';

export const authFeatureSelector =
  createFeatureSelector<AppStateInterface>('auth');

export const isSubmittingSelector = createSelector(
  authFeatureSelector,
  (authState: AppStateInterface) => {
    authState.isSubmitting;
  }
);
