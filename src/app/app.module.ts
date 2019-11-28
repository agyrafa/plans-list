import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { ApiService } from "./_services/api.service";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { LoginComponent } from "./login/login.component";
import {
  PlanComponent,
  DetailDialog,
  AlertDialog
} from "./plan/plan.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { DemoMaterialModule } from "./material-module";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PlanComponent,
    DetailDialog,
    AlertDialog
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    DemoMaterialModule,
    BrowserAnimationsModule
  ],
  providers: [ApiService],
  entryComponents: [DetailDialog, AlertDialog],
  bootstrap: [AppComponent]
})
export class AppModule {}
