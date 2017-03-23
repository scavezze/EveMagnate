import { Component, OnInit } from '@angular/core';
import { RouterExtensions  } from "nativescript-angular/router";
import { Page } from "ui/page";
import { LoginService } from '../../../eveApi/services/login.service';
import { handleOpenURL, AppURL } from 'nativescript-urlhandler';
import {  } from 'low';

@Component({
	selector: 'login',
	moduleId: module.id,
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

	constructor(private routerExtension: RouterExtensions,  private page: Page, private loginService: LoginService) {
		handleOpenURL((appURL: AppURL) => {
			this.loginService.verifyAuthCode(appURL.params.get("code"), appURL.params.get("state"));
		});
	 }

	ngOnInit() { 
		this.page.actionBarHidden = true;
	}

	login() {
		this.loginService.loginToEveApi();
	}
}