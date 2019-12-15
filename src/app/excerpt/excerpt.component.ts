import { Component, OnInit } from '@angular/core';
import { Params, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { People } from '../shared/people';
import { PeopleService } from '../services/people.service';
import { Publication } from '../shared/publication';
import { PublicationService } from '../services/publication.service';


@Component({
  selector: 'app-excerpt',
  templateUrl: './excerpt.component.html',
  styleUrls: ['./excerpt.component.scss']
})
export class ExcerptComponent implements OnInit {

  peoplz: People[];
  featuredMan : People;
  articles: Publication[];
  century: string;
  volume: number;

  constructor(private peopleservice: PeopleService,
  private publicationservice: PublicationService,
  private route: ActivatedRoute,
  private location: Location) { }

  ngOnInit() {
    this.peoplz = this.peopleservice.getPeople();
    this.articles = this.publicationservice.getPublicationz();

    const id = +this.route.snapshot.params['id'];
    this.featuredMan = this.peopleservice.getMan(id.toString());

    var strIndex = this.route.snapshot.params['id'];
    console.log(strIndex.substr(0,1)==="v");

    if (this.featuredMan==undefined)
    {
      if (strIndex.substr(0,1)==="v") {this.volume=Number.parseInt(strIndex.substr(1));}
      else {this.century=strIndex;};
    }

    console.log(this.volume);

  }

  goBack(): void {
    this.location.back();
  }

}
