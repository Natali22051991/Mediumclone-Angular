import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { CreateArticleComponent } from 'src/app/createArticle/components/createArticle/createArticle.component';
import { ArticleFormModule } from 'src/app/shared/modules/articleForm/articleForm.module';
import { CreateArticleService } from 'src/app/createArticle/services/createArticle.service';
import { CreateArticleEffect } from 'src/app/createArticle/store/effects/createArticle.effect';
import { StoreModule } from '@ngrx/store';
import { reducers } from 'src/app/createArticle/store/reducers';

const routes = [
  {
    path: 'articles/new',
    component: CreateArticleComponent,
  },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ArticleFormModule,
    EffectsModule.forFeature([CreateArticleEffect]),
    StoreModule.forFeature('createArticle', reducers),
  ],
  declarations: [CreateArticleComponent],
  providers: [CreateArticleService],
})
export class CreateArticleModule {}
