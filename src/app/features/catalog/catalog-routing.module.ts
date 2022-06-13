import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatalogComponent } from './catalog.component';
import { CatalogComicComponent } from './pages/catalog-comic/catalog-comic.component';
import { CatalogListComponent } from './pages/catalog-list/catalog-list.component';

const routes: Routes = [
  {
    path: '',
    component: CatalogComponent,
    children: [
      { path: 'list', component: CatalogListComponent },
      { path: '', redirectTo: 'list', pathMatch: 'full' },
      { path: 'detail' , component: CatalogComicComponent}
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CatalogRoutingModule {}
