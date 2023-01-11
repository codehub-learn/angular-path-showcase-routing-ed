import { Injectable } from '@angular/core';
import {Person} from "../models/person";

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  private data: Person[] = [
    new Person(0, "Ioannis", 45, "UK"),
    new Person(1, "Manolis", 23, "USA"),
    new Person(2, "Nikoleta", 44, "UK"),
    new Person(3, "Menelaos", 16, "GR"),
    new Person(4, "Anna", 78, "GR"),
    new Person(5, "Akis", 18, "JP"),
    new Person(6, "Jon", 28, "KR"),
  ];

  constructor() { }

  // name, age, country

  getPersons(): Person[] {
    return this.data;
  }

  getPerson(index: number): Person {
    return this.data[index];
  }
}
