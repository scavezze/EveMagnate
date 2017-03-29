import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";

import { NativeScriptUISideDrawerModule } from "nativescript-telerik-ui/sidedrawer/angular";

import { MenuComponent } from "./components/menu/menu.component";

@NgModule({
    schemas: [NO_ERRORS_SCHEMA],
    imports: [
        NativeScriptModule,
        NativeScriptUISideDrawerModule
    ],
    exports: [
        MenuComponent
    ],
    declarations: [
        MenuComponent
    ],
    providers: [
    ]
})
export class CommonModule { }
