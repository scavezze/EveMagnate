import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { Page } from "ui/page";

@Component({
	selector: 'login',
	moduleId: module.id,
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

	constructor(private router: Router,  private page: Page) { }

	ngOnInit() { 
		this.page.actionBarHidden = true;
	}

	login() {
		this.router.navigate(["/main"]);
	}
}