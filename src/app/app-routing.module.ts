import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from '@core/components/notFound/error.component';

const routes: Routes = [
  {
    path: 'catalog',
    loadChildren: () =>
      import('./features/catalog/catalog.module').then(
        (m) => m.CatalogModule
      ),
  },
  {
    path: 'collection',
    loadChildren: () =>
      import('./features/collection/collection.module').then(
        (m) => m.CollectionModule
      ),
  },

  {
    path: '', redirectTo : 'catalog', pathMatch: 'full',
  },

  {
    path: '**', component : ErrorComponent,
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
