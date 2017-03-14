import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Router } from "@angular/router";
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

	constructor(private router: Router) {
		this.navItems = [
			new MenuItem('fa-home', 'Home', NavPaths.main),
			new MenuItem('fa-bluetooth', 'Login', NavPaths.main),
			new MenuItem('fa-home', 'Home', NavPaths.main),
			new MenuItem('fa-bluetooth', 'Sign Out', NavPaths.login)
		]
	}

	onItemTap(args) {
		var item = this.navItems[args.index];
		this.router.navigate([item.destination]);
	}

	ngOnInit() { }
}