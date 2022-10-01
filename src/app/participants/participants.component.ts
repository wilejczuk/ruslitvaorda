import { Component, OnInit } from '@angular/core';
import { People } from '../shared/people';
import { PEOPLE } from '../shared/peoplz';
import { PeopleService } from '../services/people.service';
import { PublicationService } from '../services/publication.service';

const ROLES : string[] =  ['Автор', 'Редактор', 'Рецензент', 'Дизайнер'];


@Component({
  selector: 'app-participants',
  templateUrl: './participants.component.html',
  styleUrls: ['./participants.component.scss']
})
export class ParticipantsComponent implements OnInit {

  peoplz: People[];
  featuredMan: People;

  articlesByMan : number;

  isSmallMobileDevice: MediaQueryList;
  show_num: number;
  breakpoint: number;
  cols_inside: number;

  roles = ROLES;


  constructor(private peopleService: PeopleService,
    private publicationService: PublicationService) { }

  ngOnInit() {

    this.peoplz = this.peopleService.getPeople();
    this.peoplz = this.peoplz.sort(
      function(a, b){
        var nameA=a.name_ru.toLowerCase(), nameB=b.name_ru.toLowerCase()
        if (nameA < nameB) //сортируем строки по возрастанию
          return -1
        if (nameA > nameB)
          return 1
        return 0 // Никакой сортировки
      });

      this.isSmallMobileDevice = window.matchMedia("(max-width: 599px)");

      if (this.isSmallMobileDevice.matches) this.show_num = 1
      else this.show_num = 4;


      this.breakpoint = (window.innerWidth <= 599) ? 1 : 3;
      this.cols_inside = (window.innerWidth <= 599) ? 1 : 2;

  }

  onResize(event) {
    this.breakpoint = (event.target.innerWidth <= 599) ? 1 : 3;
    this.cols_inside = (event.target.innerWidth <= 599) ? 1 : 2;

    this.show_num = (event.target.innerWidth <= 599) ? 1 : 4;
  }


}
