import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";

import { CommonModule } from '../common/common.module';
import { EveApiModule } from '../eveApi/eveApi.module';

import { MainComponent } from "./components/main/main.component";
import { MailComponent } from "./components/mail/mail.component";

@NgModule({
    schemas: [NO_ERRORS_SCHEMA],
    imports: [
        NativeScriptModule,
        CommonModule,
        EveApiModule
    ],
    declarations: [
        MainComponent,
        MailComponent
    ],
    providers: [
    ]
})
export class MainModule { }
