import { Component } from '@angular/core';
import { LoginService } from './modules/eveApi/services/login.service';

@Component({
    selector: "ns-app",
    templateUrl: "app.component.html",
})
export class AppComponent { 
    constructor(private loginService: LoginService) {
        loginService.init();
    }
}
