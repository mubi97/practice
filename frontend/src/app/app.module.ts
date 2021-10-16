import { RouterModule } from "@angular/router";
import { CustomMaterialModule } from "./core/material.module";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { LayoutModule } from "@angular/cdk/layout";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { FlexLayoutModule } from "@angular/flex-layout";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { JwtModule } from "@auth0/angular-jwt";
import { StaffNavigationComponent } from "./staffPanel/staff-navigation/staff-navigation.component";
import { IconsProviderModule } from "./icons-provider.module";
import { NZ_I18N } from "ng-zorro-antd/i18n";
import { en_US } from "ng-zorro-antd/i18n";
import { registerLocaleData } from "@angular/common";
import en from "@angular/common/locales/en";
import { SuperNavigationComponent } from "./modules/navigations/super-navigation/super-navigation.component";
import { AdminNavigationComponent } from "./modules/navigations/admin-navigation/admin-navigation.component";
import { ClientNavigationComponent } from "./modules/navigations/client-navigation/client-navigation.component";
import { LoginComponent } from "./modules/shared/sharedPages/login/login.component";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { ButtonComponent } from "./component/htmlComponents/button/button.component";
import { TextBoxComponent } from "./component/htmlComponents/text-box/text-box.component";
import { CapitalizationPipe } from "src/Pipes/camelCaseToCapitalization.pipe";

registerLocaleData(en);
/**
 * This function sends the request to get token.
 * @returns
 */
export function tokenGetter() {
  return localStorage.getItem("access_token");
}
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    StaffNavigationComponent,
    SuperNavigationComponent,
    AdminNavigationComponent,
    ClientNavigationComponent,
    ButtonComponent,
    TextBoxComponent,
    CapitalizationPipe,
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    LayoutModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    CustomMaterialModule,
    JwtModule.forRoot({
      config: {
        tokenGetter,
        whitelistedDomains: ["localhost:8080"],
        blacklistedRoutes: ["localhost:8080/api/auth/signin"],
      },
    }),
    HttpClientModule,
    AppRoutingModule,
    IconsProviderModule,
    NgbModule,
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent],
})
export class AppModule {}
