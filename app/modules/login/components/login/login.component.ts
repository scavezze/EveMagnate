import { Component, OnInit } from '@angular/core';
import { RouterExtensions  } from "nativescript-angular/router";
import { Page } from "ui/page";

@Component({
	selector: 'login',
	moduleId: module.id,
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

	constructor(private routerExtension: RouterExtensions,  private page: Page) { }

	ngOnInit() { 
		this.page.actionBarHidden = true;
	}

	login() {
		this.routerExtension.navigate(["/main"]);
	}
}