import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptHttpModule } from "nativescript-angular/http";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";

import { LoginService } from './services/login.service';

@NgModule({
    schemas: [NO_ERRORS_SCHEMA],
    imports: [
        NativeScriptHttpModule,
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
