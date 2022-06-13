import { Component, OnInit } from '@angular/core';
import { Comic } from '@core/models/comic.model';
import { CatalogService } from '../../services/catalog.service';

@Component({
  selector: 'cm-catalog-comic',
  templateUrl: './catalog-comic.component.html',
  styleUrls: ['./catalog-comic.component.scss']
})
export class CatalogComicComponent implements OnInit {

  comic !: Comic;
  constructor(private catalogService : CatalogService) { }

  ngOnInit(): void {
    this.catalogService.selected$.subscribe(
      (comic) => comic && (this.comic = comic)
    );
  }

  addToCollection(){
    this.catalogService.addToCollection(this.comic);
  }
}
