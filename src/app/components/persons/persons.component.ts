import { Component, OnInit } from '@angular/core';
import {PersonService} from "../../shared/services/person.service";
import {Person} from "../../shared/models/person";
import {Router} from "@angular/router";

@Component({
  selector: 'app-persons',
  templateUrl: './persons.component.html',
  styleUrls: ['./persons.component.css']
})
export class PersonsComponent implements OnInit {

  data!: Person[];

  constructor(private personsService: PersonService, private router: Router) { }

  ngOnInit(): void {
    this.data = this.personsService.getPersons();
  }

  viewDetails(id: number){
    this.router.navigate(["persons", id]);
  }

}
