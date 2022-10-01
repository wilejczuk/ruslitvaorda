import { Component, OnInit } from '@angular/core';
import { People } from '../shared/people';
import { PEOPLE } from '../shared/peoplz';
import { PeopleService } from '../services/people.service';
import { PublicationService } from '../services/publication.service';
// import { Router } from '@angular/router';
// import { NavigationEnd } from '@angular/router';

const ROLES : string[] =  ['Автор', 'Редактор', 'Рецензент', 'Дизайнер'];
const CENTURIES : string[] =  ['IX', 'X', 'XI', 'XII', 'XIII', 'XIV', 'XV', 'XVI', 'XVII'];
const VOLUMES: number[] = [1, 2, 3, 4, 5, 6, 7];

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  peoplz: People[];
  featuredMan: People;

  articlesByMan : number;

  roles = ROLES;
  centuries = CENTURIES;
  volumes = VOLUMES;

  isSmallMobileDevice: MediaQueryList;
  show_num: number;
  breakpoint: number;
  cols_inside: number;

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

    centAvatars = '123456789'.split('').map((x, i) => {
      const num = i;
      // const num = Math.floor(Math.random() * 1000);
      return {
        url: `../../assets/images/century/${num}.jpg`,
        title: `${num}`
      };
    });


 /// END OF carousel data


  onSelect(man: People) {
    this.featuredMan = man;
    console.log(this);
  }

  constructor(private peopleService: PeopleService,
    private publicationService: PublicationService
    // , private router: Router
  ) {
    // router.events.subscribe(event => {
    //     if (event instanceof NavigationEnd) {
    //         const tree = router.parseUrl(router.url);
    //         if (tree.fragment) {
	  //       const element = document.querySelector("#" + tree.fragment);
	  //       if (element) { element.scrollIntoView(element); }
    //         }
    //      }
    // });
}

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

      this.articlesByMan = this.publicationService.getArticleByAuthor("Гулецкий Д.В.").length;

  }

  onResize(event) {
    this.breakpoint = (event.target.innerWidth <= 599) ? 1 : 3;
    this.cols_inside = (event.target.innerWidth <= 599) ? 1 : 2;

    this.show_num = (event.target.innerWidth <= 599) ? 1 : 4;
  }

}
