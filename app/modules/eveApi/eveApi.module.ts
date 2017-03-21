import { NgModule } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";

import { LoginService } from './services/login.service';

@NgModule({
    imports: [
        NativeScriptModule
    ],
    exports: [
    ],
    declarations: [
    ],
    providers: [
        LoginService
    ]
})
export class EveApiModule { }
