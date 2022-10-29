import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AddToFavoriteComponent } from 'src/app/shared/modules/addToFavorites/components/addToFavorites/addToFavorites.component';
import { AddToFavoritesService } from 'src/app/shared/modules/addToFavorites/components/addToFavorites/addToFavorites.service';
import { EffectsModule } from '@ngrx/effects';
import { AddToFavoritesEffect } from './store/effects/addToFavorites.effect';

@NgModule({
  imports: [CommonModule, EffectsModule.forFeature([AddToFavoritesEffect])],
  declarations: [AddToFavoriteComponent],
  exports: [AddToFavoriteComponent],
  providers: [AddToFavoritesService],
})
export class AddToFavoriteModule {}
