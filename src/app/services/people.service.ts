import { Injectable } from '@angular/core';
import { People } from '../shared/people';
import { PEOPLE } from '../shared/peoplz';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  constructor() { }

  getPeople(): People[] {
    return PEOPLE;
  }

  getMan(id: string): People {
    return PEOPLE.filter((man) => (man.id === id))[0];
  }

  getManByName(name: string): People {
    return PEOPLE.filter((man) => (man.name_ru === name))[0];
  }

  getFeaturedMan(): People {
    return PEOPLE[0];
  }

}
