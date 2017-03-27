import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../../eveApi/services/login.service';
import { SkillsApi } from '../../../eveApi/eveSwaggerApi';

@Component({
	selector: 'main',
	moduleId: module.id,
	templateUrl: './main.component.html',
	styleUrls: ['./main.component.css'],
	providers: [SkillsApi]
})

export class MainComponent implements OnInit {

	constructor(private loginService: LoginService, private skillsApi: SkillsApi) { 	
		// this.loginService.getCharacters().subscribe(
		// 	(data) => {
		// 		skillsApi.getCharactersCharacterIdSkills(data["CharacterID"], "tranquility", loginService.getToken(), "eveMagnate").subscribe(
		// 			(json) => {
		// 				console.log(JSON.stringify(json));
		// 			},() => alert("Unfortunately we were unable to retrive characters")
		// 		);
		// 	},() => alert("Unfortunately we were unable to retrive characters")
		// );
	}

	ngOnInit() {

	}
}