import { Component, OnInit } from '@angular/core';
import { People } from '../shared/people';
import { PEOPLE } from '../shared/peoplz';
import { PeopleService } from '../services/people.service';

const ROLES : string[] =  ['Автор', 'Редактор', 'Рецензент', 'Дизайнер'];
const CENTURIES : string[] =  ['IX', 'X', 'XI', 'XII', 'XIII', 'XIV', 'XV', 'XVI', 'XVII'];
const VOLUMES: number[] = [1, 2, 3, 4, 5, 6, 7];

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  peoplz: People[];
  featuredMan: People;

  roles = ROLES;
  centuries = CENTURIES;
  volumes = VOLUMES;

  isSmallMobileDevice: MediaQueryList;
  show_num: number;

/// carousel data

    currentIndex = 0;
    currentIndex1 = 0;
    speed = 15000;
    infinite = true;
    direction = 'right';
    directionToggle = true;
    autoplay = true;
    avatars = '1234567'.split('').map((x, i) => {
      const num = i;
      // const num = Math.floor(Math.random() * 1000);
      return {
        url: `../../assets/images/volumes/${num+1}.jpg`,
        title: `${num}`
      };
    });

    centAvatars = '12345'.split('').map((x, i) => {
      const num = i;
      // const num = Math.floor(Math.random() * 1000);
      return {
        url: `../../assets/images/century/${num}.jpg`,
        title: `${num}`
      };
    });

    click(i) {
      this.isSmallMobileDevice = window.matchMedia("(max-width: 599px)");
      if (this.isSmallMobileDevice.matches) this.show_num = 1
      else this.show_num = 4;
    }

 /// END OF carousel data


  onSelect(man: People) {
    this.featuredMan = man;
    console.log(this);
    //PeopleService.setFeaturedMen(man);
    //console.log(HomeComponent.);
  }

  constructor(private peopleService: PeopleService) { }

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

  }

}
