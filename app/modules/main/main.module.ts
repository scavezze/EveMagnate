import { NgModule } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";

import { CommonModule } from '../common/common.module';

import { MainComponent } from "./components/main/main.component";

@NgModule({
    imports: [
        NativeScriptModule,
        CommonModule
    ],
    declarations: [
        MainComponent
    ],
    providers: [
    ]
})
export class MainModule { }
