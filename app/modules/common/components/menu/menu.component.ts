import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { RouterExtensions  } from "nativescript-angular/router";
import { MenuItem } from './menuItem';
import { NavPaths } from '../../../../app.routing';

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

	constructor(private routerExtension: RouterExtensions) {
		this.navItems = [
			new MenuItem('fa-home', 'Home', NavPaths.main),
			new MenuItem('fa-envelope', 'Mail', NavPaths.mail)
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
		
	}

	ngOnInit() { }
}