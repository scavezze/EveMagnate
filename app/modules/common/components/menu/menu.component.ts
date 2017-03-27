import { Component, OnInit, ChangeDetectionStrategy, Input, ViewChild, AfterViewInit } from '@angular/core';
import { RouterExtensions  } from "nativescript-angular/router";
import { RadSideDrawerComponent, SideDrawerType } from "nativescript-telerik-ui/sidedrawer/angular";
import { MenuItem } from './menuItem';
import { NavPaths } from '../../../../app.routing';
import { Page } from "ui/page";

@Component({
	selector: 'menu',
	moduleId: module.id,
	templateUrl: './menu.component.html',
	styleUrls: ['./menu.component.css'],
	changeDetection: ChangeDetectionStrategy.OnPush
})

export class MenuComponent implements OnInit {
	public navItems: Array<MenuItem>;
	@Input() title: string;
	@ViewChild("menuDrawer") menuDrawer: RadSideDrawerComponent
	private _drawer: SideDrawerType;

	constructor(private routerExtension: RouterExtensions,  private page: Page) {
		this.navItems = [
			new MenuItem('fa-home', 'Home', NavPaths.main),
			new MenuItem('fa-envelope', 'Mail', NavPaths.mail),
			new MenuItem('fa-envelope', 'Logout', NavPaths.login)
		]
	}

	onItemTap(args) {
		var item = this.navItems[args.index];
		this.routerExtension.navigate([item.destination]);
	}

	onNavBtnTap() {
		this.routerExtension.backToPreviousPage();
	}

	openMenu() {
		 this._drawer.toggleDrawerState();
	}

	ngOnInit() {
		if(!this.routerExtension.canGoBackToPreviousPage()) {
			this.page.actionBar.navigationButton.visibility = 'collapsed';
		}
	 }

	ngAfterViewInit() {
		this._drawer = this.menuDrawer.sideDrawer;
	}
}