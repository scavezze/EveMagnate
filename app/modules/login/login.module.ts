import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";

import { CommonModule } from '../common/common.module';
import { EveApiModule } from '../eveApi/eveApi.module';


import { LoginComponent } from "./components/login/login.component";

@NgModule({
    schemas: [NO_ERRORS_SCHEMA],
    imports: [
        NativeScriptModule,
        CommonModule,
        EveApiModule
    ],
    declarations: [
        LoginComponent,
    ],
    providers: [
    ]
})
export class LoginModule { }
