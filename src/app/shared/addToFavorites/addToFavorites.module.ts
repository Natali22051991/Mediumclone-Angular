import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AddToFavoritesComponent } from './components/addToFavorites/addTofavorites.component';

@NgModule({
  imports: [CommonModule],
  declarations: [AddToFavoritesComponent],
  exports: [AddToFavoritesComponent],
})
export class AddToFavoritesModule {}
