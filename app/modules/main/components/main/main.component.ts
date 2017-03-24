import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../../eveApi/services/login.service';

@Component({
	selector: 'main',
	moduleId: module.id,
	templateUrl: './main.component.html',
	styleUrls: ['./main.component.css']
})

export class MainComponent implements OnInit {

	constructor(private loginService: LoginService) { 	
		this.loginService.getCharacters().subscribe(
			(data) => {
				console.log(JSON.stringify(data));
			},() => alert("Unfortunately we were unable to retrive characters"));
	}

	ngOnInit() {

	}
}