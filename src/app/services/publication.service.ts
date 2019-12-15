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

  //getFeaturedMan(): People {
  //  return PEOPLE.filter((man) => man.featured)[0];
  //}

}
