import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DepartmentListComponent } from './department-List/department-List.component';
import { DeparmentDetailComponent } from './deparment-detail/deparment-detail.component';

@NgModule({
   declarations: [
      AppComponent,
      DepartmentListComponent,
      DeparmentDetailComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
