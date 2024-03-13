import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from '../components/home/home.component';
import { PropertiesDetailComponent } from '../components/properties-detail/properties-detail.component';
import { PropertiesListComponent } from '../components/properties-list/properties-list.component';
import { CoreModule } from 'src/app/core/modules/core.module';
import { NewsletterComponent } from 'src/app/core/components/newsletter/newsletter.component';



@NgModule({
  declarations: [HomeComponent, PropertiesDetailComponent, PropertiesListComponent, NewsletterComponent],
  imports: [
    CommonModule, CoreModule ],
  exports: [HomeComponent, PropertiesDetailComponent, PropertiesListComponent, NewsletterComponent]
})
export class featureModule { }
