import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppRoutingModule } from 'src/app/app-routing.module';
import { AppComponent } from 'src/app/app.component';
import { AuthModule } from 'src/app/auth/auth.module';
import { StoreModule } from '@ngrx/store';
import { environment } from 'src/environments/environment';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { EffectsModule } from '@ngrx/effects';
import { TopBarModule } from './shared/modules/backendErrorMassages/topBar/topBar.module';
import { PersistanceService } from './shared/services/persistance.service';
import { AuthInterceptor } from './shared/services/authinterceptor.service.';
import { GlobalFeedModule } from './globalFeed/globalFeed.module';
import { routerReducer, StoreRouterConnectingModule } from '@ngrx/router-store';
import { YourFeedModule } from './yourFeed/yourFeed.module';
import { TagFeedModule } from './tagFeedFeed/tagFeed.module';
import { ArticleModule } from './article/article.module';
import { CreateArticleModule } from './createArticle/createArticle.module';
import { EditArticleModule } from './editArticle/editArticle.module';
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    AuthModule,
    StoreModule.forRoot({ router: routerReducer }),
    StoreRouterConnectingModule.forRoot(),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
    EffectsModule.forRoot([]),
    TopBarModule,
    GlobalFeedModule,
    YourFeedModule,
    TagFeedModule,
    CreateArticleModule,
    ArticleModule,
    EditArticleModule,
  ],
  providers: [
    PersistanceService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
