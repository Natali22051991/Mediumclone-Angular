import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { ArticleFormModule } from 'src/app/shared/modules/articleForm/articleForm.module';
import { StoreModule } from '@ngrx/store';
import { reducers } from 'src/app/editArticle/store/reducers';
import { EditArticleService } from 'src/app/editArticle/services/editArticle.service';
import { ArticleService as sharedArticleService } from 'src/app/shared/services/article.service';
import { GetArticleEffect } from 'src/app/editArticle/store/effects/getArticle.effect';
import { UpdateArticleEffect } from 'src/app/editArticle/store/effects/updateArticle.effect';
import { EditArticleComponent } from 'src/app/editArticle/components/editArticle/editArticle.component';
import { LoadingModule } from '../shared/modules/loading/loading.module';

const routes = [
  {
    path: 'articles/:slug/edit',
    component: EditArticleComponent,
  },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ArticleFormModule,
    EffectsModule.forFeature([UpdateArticleEffect, GetArticleEffect]),
    StoreModule.forFeature('editArticle', reducers),
    LoadingModule,
  ],
  declarations: [EditArticleComponent],
  providers: [EditArticleService, sharedArticleService],
})
export class EditArticleModule {}
