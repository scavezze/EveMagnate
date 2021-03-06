import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptHttpModule } from "nativescript-angular/http";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";

import { LoginService } from './services/login.service';
import { EveImageService } from './services/eveImage.service';
import { IskPipe } from './pipes/isk.pipe';

@NgModule({
    schemas: [NO_ERRORS_SCHEMA],
    imports: [
        NativeScriptHttpModule,
        NativeScriptModule
    ],
    exports: [
        IskPipe
    ],
    declarations: [
        IskPipe
    ],
    providers: [
        LoginService,
        EveImageService
    ]
})
export class EveApiModule { }
