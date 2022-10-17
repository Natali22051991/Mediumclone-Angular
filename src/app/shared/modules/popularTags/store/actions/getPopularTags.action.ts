import { createAction, props } from '@ngrx/store';
import { PopularTagType } from 'src/app/shared/types/popularTag.type';
import { ActionTypes } from 'src/app/shared/modules/popularTags/store/actionsType';

export const getPopularTagsAction = createAction(ActionTypes.GET_POPULAR_TAGS);

export const getPopularTagsSuccessAction = createAction(
  ActionTypes.GET_POPULAR_TAGS_SUCCESS,
  props<{ popularTags: PopularTagType[] }>()
);

export const getPopularTagsFailureAction = createAction(
  ActionTypes.GET_POPULAR_TAGS_FAILURE
);
