import { NgModule } from "@angular/core";
import { NZ_ICONS, NzIconModule } from "ng-zorro-antd/icon";

import {
  MenuFoldOutline,
  MenuUnfoldOutline,
  FormOutline,
  DashboardOutline,
} from "@ant-design/icons-angular/icons";

/**
 * icons is a contant variable containing cons for our application
 */
const icons = [
  MenuFoldOutline,
  MenuUnfoldOutline,
  DashboardOutline,
  FormOutline,
];

@NgModule({
  imports: [NzIconModule],
  exports: [NzIconModule],
  providers: [{ provide: NZ_ICONS, useValue: icons }],
})
export class IconsProviderModule {}
