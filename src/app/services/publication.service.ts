import { Injectable } from '@angular/core';
import { Publication } from '../shared/publication';
import { PUBLICATION } from '../shared/articles';

@Injectable({
  providedIn: 'root'
})
export class PublicationService {

  constructor() { }

  getPublicationz(): Publication[] {
    return PUBLICATION;
  }


  getArticle(id: string): Publication {
    return PUBLICATION.filter((article) => (article.id === id))[0];
  }

  getArticleByAuthor (author: string): Publication [] {
    return PUBLICATION.filter((article) => (article.authors.includes(author)));
  }

  getArticleByVolume (volume: number): Publication [] {
    return PUBLICATION.filter((article) => (article.volume === volume));
  }

  getArticleByCentury (ct: string): Publication [] {
    return PUBLICATION.filter((article) => (article.centuries.includes(ct)));
  }

}
