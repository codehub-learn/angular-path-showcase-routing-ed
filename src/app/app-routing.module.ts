import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {AboutUsComponent} from "./components/about-us/about-us.component";
import {NotFoundComponent} from "./components/not-found/not-found.component";
import {PersonsComponent} from "./components/persons/persons.component";
import {PersonsDetailsComponent} from "./components/persons-details/persons-details.component";

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'aboutus', component: AboutUsComponent},
  {path: 'persons', component: PersonsComponent},
  {path: 'persons/:id', component: PersonsDetailsComponent},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
