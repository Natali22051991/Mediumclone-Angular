import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { GlobalFeedComponent } from 'src/app/globalFeed/components/globalFeed.component';
import { FeedModule } from 'src/app/shared/modules/Feed/feed.module';
import { BannerModule } from 'src/app/shared/modules/banner/banner.module';
import { PopularTagsModule } from '../shared/modules/popularTags/popularTags.module';

const routes = [
  {
    path: '',
    component: GlobalFeedComponent,
  },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FeedModule,
    BannerModule,
    PopularTagsModule,
  ],
  declarations: [GlobalFeedComponent],
})
export class GlobalFeedModule {}
