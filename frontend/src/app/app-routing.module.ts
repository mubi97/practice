import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ButtonComponent } from "./component/htmlComponents/button/button.component";
import { TextBoxComponent } from "./component/htmlComponents/text-box/text-box.component";
import { AdminNavigationComponent } from "./modules/navigations/admin-navigation/admin-navigation.component";
import { ClientNavigationComponent } from "./modules/navigations/client-navigation/client-navigation.component";
import { SuperNavigationComponent } from "./modules/navigations/super-navigation/super-navigation.component";
import { LoginComponent } from "./modules/shared/sharedPages/login/login.component";

const routes: Routes = [
  { path: "", pathMatch: "full", redirectTo: "login" },
  { path: "login", component: LoginComponent },
  { path: "button", component: ButtonComponent },
  { path: "text-box", component: TextBoxComponent },
  {
    path: "super",
    component: SuperNavigationComponent,
    children: [],
  },
  {
    path: "admin",
    component: AdminNavigationComponent,
    children: [],
  },
  {
    path: "client",
    component: ClientNavigationComponent,
    children: [],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
