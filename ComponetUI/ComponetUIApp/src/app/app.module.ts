import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

import { FooterComponent } from "./common/footer/footer.component";
import { HeaderComponent } from "./common/header/header.component";
import { HomeComponent } from "./pages/home/home.component";
import { GenericComponent } from "./pages/generic/generic.component";
import { ElementssComponent } from "./pages/elementss/elementss.component";

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    GenericComponent,
    ElementssComponent
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
