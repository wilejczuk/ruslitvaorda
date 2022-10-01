import { Component, OnInit, Input } from '@angular/core';
import { People } from '../shared/people';
import { Publication } from '../shared/publication';
//import { PUBLICATION } from '../shared/articles';
import { PublicationService } from '../services/publication.service';
import { PeopleService } from '../services/people.service';

@Component({
  selector: 'app-ppl-detailed',
  templateUrl: './ppl-detailed.component.html',
  styleUrls: ['./ppl-detailed.component.scss']
})
export class PplDetailedComponent implements OnInit {

  @Input()
  people: People;

  articles: Publication[] = this.publicationService.getPublicationz();
  articlesa: Publication[];

  constructor(private publicationService: PublicationService,
            private peopleService: PeopleService) { }

  ngOnInit() {
    this.articlesa = this.publicationService.getArticleByAuthor (this.people.name_ru);

    this.articlesa = this.articlesa.sort(
      function(a, b){
        return a.volume-b.volume;
      });
  }

}
