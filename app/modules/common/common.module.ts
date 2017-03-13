import { NgModule } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";

import { NativeScriptUISideDrawerModule } from "nativescript-telerik-ui/sidedrawer/angular";
import { TNSFontIconModule } from 'nativescript-ngx-fonticon';


import { MenuComponent } from "./components/menu/menu.component";

@NgModule({
    imports: [
        NativeScriptModule,
        NativeScriptUISideDrawerModule,
        TNSFontIconModule.forRoot({
            'fa': './assets/font-awesome.css'
        })
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
