import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";

import { LoginComponent } from './modules/login/components/login/login.component';
import { MainComponent } from './modules/main/components/main/main.component';
import { MailComponent } from './modules/main/components/mail/mail.component';

import { AuthGuard } from './modules/eveApi/services/authGuard.service';

export const NavPaths = {
    login: "/login",
    main: "/main",
    mail: "/mail"
};

const routes: Routes = [
    { path: "", redirectTo: NavPaths.main, pathMatch: "full" },
    { path: "login", component: LoginComponent },
    { path: "main", component: MainComponent, canActivate: [AuthGuard] },
    { path: "mail", component: MailComponent, canActivate: [AuthGuard]  },
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule],
    providers:[AuthGuard]
})
export class AppRoutingModule { }