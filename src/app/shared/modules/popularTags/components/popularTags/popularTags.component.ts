import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { PopularTagType } from 'src/app/shared/types/popularTag.type';
import { getPopularTagsAction } from 'src/app/shared/modules/popularTags/store/actions/getPopularTags.action';
import {
  errorSelector,
  isLoadingSelector,
  popularTagsSelector,
} from 'src/app/shared/modules/popularTags/store/selectors';

@Component({
  selector: 'mc-popular-tags',
  templateUrl: './popularTags.component.html',
  styleUrls: ['./popularTags.component.scss'],
})
export class PopularTagsComponent implements OnInit {
  popularTags$: Observable<PopularTagType[] | null>;
  isLoading$: Observable<Boolean>;
  error$: Observable<string | null>;

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.initializeValues();
    this.fetchData();
  }

  initializeValues(): void {
    this.popularTags$ = this.store.pipe(select(popularTagsSelector));
    this.isLoading$ = this.store.pipe(select(isLoadingSelector));
    this.error$ = this.store.pipe(select(errorSelector));
  }

  fetchData(): void {
    this.store.dispatch(getPopularTagsAction());
  }
}
