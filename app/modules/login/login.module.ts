import { NgModule } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";

import { CommonModule } from '../common/common.module';

import { LoginComponent } from "./components/login/login.component";

@NgModule({
    imports: [
        NativeScriptModule,
        CommonModule
    ],
    declarations: [
        LoginComponent,
    ],
    providers: [
    ]
})
export class LoginModule { }
