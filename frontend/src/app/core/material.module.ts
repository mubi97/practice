import {NgModule} from "@angular/core";
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { NzLayoutModule } from "ng-zorro-antd/layout";
import { NzMenuModule } from "ng-zorro-antd/menu";
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzMessageModule } from 'ng-zorro-antd/message';


@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NzLayoutModule,
    NzMenuModule,
    NzFormModule,
    NzInputModule, 
    NzButtonModule,
    NzMessageModule,
    

],
  exports: [
    CommonModule,
    NzLayoutModule,
    NzMenuModule,
    ReactiveFormsModule,
    NzFormModule,
    NzInputModule, 
    NzButtonModule,
    NzMessageModule,
    ],
})
export class CustomMaterialModule { }
