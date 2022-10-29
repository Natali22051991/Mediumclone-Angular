import { Component, OnInit } from '@angular/core';
import { ArticleInputInterface } from 'src/app/shared/types/articleInput.interface';
import { filter, map, Observable } from 'rxjs';
import { BackendErrorsInterface } from 'src/app/shared/types/backendErrors.interface';
import { Store, select } from '@ngrx/store';
import {
  isSubmittingSelector,
  validationErrorsSelector,
} from 'src/app/createArticle/store/selectors';
import { ActivatedRoute } from '@angular/router';
import { getArticleAction } from 'src/app/editArticle/store/actions/getArticleAction';
import {
  articleSelector,
  isLoadingSelector,
} from 'src/app/editArticle/store/selectors';
import { ArticleInterface } from 'src/app/shared/types/article.interface';
import { updateArticleAction } from '../../store/actions/updateArticle.action';

@Component({
  selector: 'mc-edit-article',
  templateUrl: './editArticle.component.html',
  styleUrls: ['./editArticle.component.scss'],
})
export class EditArticleComponent implements OnInit {
  initialValues$: Observable<ArticleInputInterface>;
  isSubmitting$: Observable<boolean>;
  isLoading$: Observable<boolean>;
  backendErrors$: Observable<BackendErrorsInterface | null>;
  slug: string;

  constructor(private store: Store, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.initialValues();
    this.fetchData();
  }

  initialValues(): void {
    this.slug = this.route.snapshot.paramMap.get('slug');
    this.isSubmitting$ = this.store.pipe(select(isSubmittingSelector));
    this.isLoading$ = this.store.pipe(select(isLoadingSelector));
    this.backendErrors$ = this.store.pipe(select(validationErrorsSelector));
    this.initialValues$ = this.store.pipe(
      select(articleSelector),
      filter(Boolean),
      map((article: ArticleInterface) => {
        return {
          title: article.title,
          description: article.description,
          body: article.body,
          tagList: article.tagList,
        };
      })
    );
  }

  fetchData(): void {
    this.store.dispatch(getArticleAction({ slug: this.slug }));
  }

  onSubmit(articleInput: ArticleInputInterface): void {
    console.log(articleInput);
    this.store.dispatch(updateArticleAction({ articleInput, slug: this.slug }));
  }
}
