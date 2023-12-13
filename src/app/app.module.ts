import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { NavCompanyComponent } from './nav-company/nav-company.component';
import { NavVisaComponent } from './nav-visa/nav-visa.component';
import { NavServicesComponent } from './nav-services/nav-services.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    NavCompanyComponent,
    NavVisaComponent,
    NavServicesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
