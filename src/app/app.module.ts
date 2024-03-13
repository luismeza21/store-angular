import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/modules/core.module';
import { featureModule } from './features/modules/feature.module';
import { SharedModule } from './shared/modules/shared/shared.module';
import { FormsModule } from '@angular/forms'; 
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';;


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    featureModule,
    CoreModule,
    SharedModule,
    NgbModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
