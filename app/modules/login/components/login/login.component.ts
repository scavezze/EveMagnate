import { Component, OnInit } from '@angular/core';
import { RouterExtensions  } from "nativescript-angular/router";
import { Page } from "ui/page";
import { LoginService } from '../../../eveApi/services/login.service';
import { handleOpenURL, AppURL } from 'nativescript-urlhandler';

@Component({
	selector: 'login',
	moduleId: module.id,
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

	constructor(private routerExtension: RouterExtensions,  private page: Page, private loginService: LoginService) {
		handleOpenURL((appURL: AppURL) => {
			console.log('Got the following appURL', appURL);
		});
	 }

	ngOnInit() { 
		this.page.actionBarHidden = true;
	}

	login() {
		this.loginService.loginToEveApi();
	}
}