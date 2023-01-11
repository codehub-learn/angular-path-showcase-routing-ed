import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {PersonService} from "../../shared/services/person.service";
import {Person} from "../../shared/models/person";

@Component({
  selector: 'app-persons-details',
  templateUrl: './persons-details.component.html',
  styleUrls: ['./persons-details.component.css']
})
export class PersonsDetailsComponent implements OnInit {

  person!: Person;

  constructor(private activatedRoute: ActivatedRoute, private personService: PersonService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      let id = params["id"];
      this.person = this.personService.getPerson(id);
    })
  }
}
