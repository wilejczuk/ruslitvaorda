import { Component, OnInit, OnDestroy } from '@angular/core';
import { Params, ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { Location } from '@angular/common';

import { People } from '../shared/people';
import { PeopleService } from '../services/people.service';
import { Publication } from '../shared/publication';
import { PublicationService } from '../services/publication.service';
import { Book } from '../shared/book';
import { BookService } from '../services/book.service';

@Component({
  selector: 'app-excerpt',
  templateUrl: './excerpt.component.html',
  styleUrls: ['./excerpt.component.scss']
})
export class ExcerptComponent implements OnInit, OnDestroy {

  peoplz: People[];
  featuredMan : People;
  articles: Publication[];
  articlesa: Publication[];
  articles_vol: Publication[];
  articles_ct: Publication[];
  books: Book[];
  century: string;
  volume: number;

  navigationSubscription;

  constructor(private peopleservice: PeopleService,
  private publicationservice: PublicationService,
  private bookservice: BookService,
  private route: ActivatedRoute,
  private router: Router,
  private location: Location) {

    this.navigationSubscription = this.router.events.subscribe((e: any) => {
      // If it is a NavigationEnd event re-initalise the component
      if (e instanceof NavigationEnd) {
        this.ngOnInit();
      }
    });

   }

  ngOnInit() {

    this.featuredMan=undefined;
    this.volume=undefined;
    this.century=undefined;

    this.peoplz=undefined;
    this.articles=undefined;
    this.articlesa=undefined;
    this.articles_vol=undefined;
    this.articles_ct=undefined;

    this.books = undefined;

    this.peoplz = this.peopleservice.getPeople();
    this.articles = this.publicationservice.getPublicationz();

    const id = +this.route.snapshot.params['id'];
    this.featuredMan = this.peopleservice.getMan(id.toString());

    var strIndex = this.route.snapshot.params['id'];

    if (this.featuredMan==undefined)
    {
      if (strIndex.substr(0,1)==="v") {
        this.volume=Number.parseInt(strIndex.substr(1));
        this.books = this.bookservice.getBookById (this.volume.toString());
      }
      else {
        this.century=strIndex;
        this.books = this.bookservice.getBookByCentury (this.century);
      };
    }
    else {

            this.books = this.bookservice.getBookByAuthor(this.featuredMan.name_ru);
            this.articlesa = this.publicationservice.getArticleByAuthor (this.featuredMan.name_ru);

            this.articlesa = this.articlesa.sort(
              function(a, b){
                return a.volume-b.volume;
              });
            }

    this.articles_vol = this.publicationservice.getArticleByVolume(this.volume);

    this.articles_ct = this.publicationservice.getArticleByCentury(this.century).sort(
      function(a, b){
        return a.volume-b.volume;
      });


  }

  ngOnDestroy() {
   if (this.navigationSubscription) {
      this.navigationSubscription.unsubscribe();
   }
 }

  goBack(): void {
    this.location.back();
  }

}
