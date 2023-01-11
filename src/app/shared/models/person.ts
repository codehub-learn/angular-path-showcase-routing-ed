export class Person {
  private _id: number;
  private _name: string;
  private _age: number;
  private _country: string;


  constructor(id: number, name: string, age: number, country: string) {
    this._id = id;
    this._name = name;
    this._age = age;
    this._country = country;
  }

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get age(): number {
    return this._age;
  }

  set age(value: number) {
    this._age = value;
  }

  get country(): string {
    return this._country;
  }

  set country(value: string) {
    this._country = value;
  }
}
