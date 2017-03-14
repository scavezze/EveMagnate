import { NgModule } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";

import { CommonModule } from '../common/common.module';

import { MainComponent } from "./components/main/main.component";
import { MailComponent } from "./components/mail/mail.component";

@NgModule({
    imports: [
        NativeScriptModule,
        CommonModule
    ],
    declarations: [
        MainComponent,
        MailComponent
    ],
    providers: [
    ]
})
export class MainModule { }
