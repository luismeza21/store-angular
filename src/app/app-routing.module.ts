import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './features/components/home/home.component';
import { PropertiesListComponent } from './features/components/properties-list/properties-list.component';
import { PropertiesDetailComponent } from './features/components/properties-detail/properties-detail.component';


const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'list', component: PropertiesListComponent},
  {path: 'detail/:id', component: PropertiesDetailComponent}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule, RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
