import { Component, OnInit, ViewChild, ElementRef  } from '@angular/core';
import { Image } from "ui/image";
import * as imageSource from 'image-source';
import { LoginService } from '../../../eveApi/services/login.service';
import { EveImageService, Sizes } from '../../../eveApi/services/eveImage.service';

@Component({
	selector: 'main',
	moduleId: module.id,
	templateUrl: './main.component.html',
	styleUrls: ['./main.component.css']
})

export class MainComponent implements OnInit {
	@ViewChild("characterImage") characterImage: ElementRef 

	constructor(private loginService: LoginService, private eveImageService: EveImageService) { 	

	}

	ngOnInit() {
        let imageView: Image = this.characterImage.nativeElement;

		this.eveImageService.getCharacterImage(this.loginService.currentCharacter.CharacterID, Sizes.LARGE).then((img: imageSource.ImageSource)=> {
			imageView.imageSource = img
		});
	}
}