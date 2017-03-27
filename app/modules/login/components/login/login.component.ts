import { Component, OnInit, NgZone } from '@angular/core';
import { RouterExtensions  } from "nativescript-angular/router";
import { Page } from "ui/page";
import { LoginService } from '../../../eveApi/services/login.service';
import { handleOpenURL, AppURL } from 'nativescript-urlhandler'
import { NavPaths } from '../../../../app.routing';
import * as application from "application";

@Component({
	selector: 'login',
	moduleId: module.id,
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

	constructor(private routerExtension: RouterExtensions,  private page: Page, private loginService: LoginService, private zone: NgZone) {
		handleOpenURL((appURL: AppURL) => {
			if (application.ios) {
				let vc = application.ios.rootController 
				while(vc.presentedViewController != null) {
					vc = vc.presentedViewController;
				}

				vc.dismissViewControllerAnimatedCompletion(true, null);
			}

			this.loginService.verifyAuthCode(appURL.params.get("code"), appURL.params.get("state")).subscribe(
				() => {
					this.zone.run(
						() => {
							this.routerExtension.navigate([NavPaths.main], { clearHistory: true });
						}
					);
				},() => alert("Unfortunately we were unable to create your account."));
		});
	 }

	ngOnInit() { 
		this.page.actionBarHidden = true;
	}

	login() {
		this.loginService.loginToEveApi();
	}
}