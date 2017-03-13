import { NgModule } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";

import { NativeScriptUISideDrawerModule } from "nativescript-telerik-ui/sidedrawer/angular";

import { MenuComponent } from "./components/menu/menu.component";

@NgModule({
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
