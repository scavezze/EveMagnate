import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";

import { LoginComponent } from './modules/login/components/login/login.component';
import { MainComponent } from './modules/main/components/main/main.component';

export const NavPaths = {
    login: "/login",
    main: "/main"
};

const routes: Routes = [
    { path: "", redirectTo: NavPaths.login, pathMatch: "full" },
    { path: "login", component: LoginComponent },
    { path: "main", component: MainComponent },
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }