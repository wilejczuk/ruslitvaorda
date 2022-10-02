import { Component, OnInit } from '@angular/core';
import { People } from '../shared/people';
import { PEOPLE } from '../shared/peoplz';
import { PeopleService } from '../services/people.service';
import { PublicationService } from '../services/publication.service';
import { NumistaService } from '../services/numista.service';

const ROLES : string[] =  ['Автор', 'Редактор', 'Рецензент', 'Дизайнер'];
const CENTURIES : string[] =  ['IX', 'X', 'XI', 'XII', 'XIII', 'XIV', 'XV', 'XVI', 'XVII'];
const VOLUMES: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

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

  randomCoin = {};
  randomCoinDet = 0;
  randomCoinIssuer = "";
  yearsRange = "";

/// carousel data

    currentIndex = 0;
    currentIndex1 = 0;
    speed = 15000;
    infinite = true;
    direction = 'right';
    directionToggle = true;
    autoplay = true;
    avatars = '12345678901'.split('').map((x, i) => {
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
  }


  onResize(event) {
      this.breakpoint = (event.target.innerWidth <= 599) ? 1 : 3;
      this.cols_inside = (event.target.innerWidth <= 599) ? 1 : 2;
      this.show_num = (event.target.innerWidth <= 599) ? 1 : 4;
  }

  constructor(
    private peopleService: PeopleService,
    private publicationService: PublicationService,
    private numistaService: NumistaService
  ) {}

  ngOnInit() {
    const reqN = this.numistaService.getKievan();
    reqN.subscribe(
      (response) => {
        this.randomCoin = response["types"][Math.floor(Math.random() * response["count"])];
        console.log(this.randomCoin);
        this.randomCoinIssuer = this.randomCoin["issuer"]["name"];
        this.yearsRange = ", AD "+this.randomCoin["min_year"]+"-"+this.randomCoin["max_year"];
        const reqDetails = this.numistaService.getParticular(this.randomCoin["id"]);
        // запрашиваем больше деталей о конкретном экземпляре
        reqDetails.subscribe(
          (response) => {
            if (response["references"]) this.randomCoinDet = response["references"][0]["number"];
            console.log(response);
          },
    	    (error) => { console.log(error); });
      },
	    (error) => { console.log(error); });

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

      //this.articlesByMan = this.publicationService.getArticleByAuthor("Гулецкий Д.В.").length;

  }




}
