import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';

import { reducers } from 'src/app/article/store/reducers';
import { ErrorMessageModule } from 'src/app/shared/modules/errorMessage/errorMessage.module';
import { LoadingModule } from 'src/app/shared/modules/loading/loading.module';
import { ArticleService as SharedArticleService } from 'src/app/shared/services/article.service';
import { ArticleComponent } from 'src/app/article/components/article.component';
import { GetArticleEffect } from 'src/app/article/store/effects/getArticle.effect';
import { TagListModule } from 'src/app/shared/modules/tagList/tagList.module';
import { DeleteArticleEffect } from './store/effects/deleteArticle.effect';
import { ArticleService } from 'src/app/article/services/article.service';

const routes = [
  {
    path: 'articles/:slug',
    component: ArticleComponent,
  },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature('article', reducers),
    EffectsModule.forFeature([GetArticleEffect, DeleteArticleEffect]),
    LoadingModule,
    ErrorMessageModule,
    TagListModule,
  ],
  declarations: [ArticleComponent],
  providers: [SharedArticleService, ArticleService],
})
export class ArticleModule {}
