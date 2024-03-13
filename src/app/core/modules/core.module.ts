import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FindPropertiesComponent } from '../components/find-properties/find-properties.component';
import { SharedModule } from 'src/app/shared/modules/shared/shared.module';
import { FormsModule } from '@angular/forms';
import { TopSellerComponent } from '../components/top-seller/top-seller.component';
import { TopSuggestionComponent } from '../components/top-suggestion/top-suggestion.component';


@NgModule({
  declarations: [FindPropertiesComponent, TopSellerComponent, TopSuggestionComponent],
  imports: [
    CommonModule, SharedModule, FormsModule
  ],
  exports: [FindPropertiesComponent, TopSellerComponent, TopSuggestionComponent]
})
export class CoreModule { }
