import { Component, OnInit, ViewChild, ElementRef  } from '@angular/core';
import { Image } from "ui/image";
import * as imageSource from 'image-source';
import { LoginService } from '../../../eveApi/services/login.service';
import { EveImageService, Sizes } from '../../../eveApi/services/eveImage.service';
import { CharacterApi, AllianceApi, CorporationApi, WalletApi } from '../../../eveApi/eveSwaggerApi/api/api';
import { GetCharactersCharacterIdOk, GetCorporationsCorporationIdOk, GetAlliancesAllianceIdOk, GetCharactersCharacterIdWallets200Ok } from '../../../eveApi/eveSwaggerApi/model/models';
import { Character } from '../../../eveApi/model';

@Component({
	selector: 'main',
	moduleId: module.id,
	templateUrl: './main.component.html',
	styleUrls: ['./main.component.css'],
	providers: [CharacterApi, CorporationApi, AllianceApi, WalletApi]
})

export class MainComponent implements OnInit {
	character: Character;
	characterInfo: GetCharactersCharacterIdOk;
	corpInfo: GetCorporationsCorporationIdOk;
	allianceInfo: GetAlliancesAllianceIdOk;
	walletInfo: GetCharactersCharacterIdWallets200Ok;

	@ViewChild("characterImage") characterImage: ElementRef 
	@ViewChild("corpImage") corpImage: ElementRef
	@ViewChild("allianceImage") allianceImage: ElementRef

	constructor(private loginService: LoginService, private eveImageService: EveImageService, private characterApi: CharacterApi, 
				private corporationApi: CorporationApi, private allianceApi: AllianceApi, private walletApi: WalletApi) { 	
		this.character = this.loginService.currentCharacter;
	}

	ngOnInit() {
		this.characterApi.getCharactersCharacterId(this.character.CharacterID).subscribe(
			(characterData: GetCharactersCharacterIdOk) => {
				this.characterInfo = characterData;
				this.getImages();
				this.getCorpInfo();
				this.getAllianceInfo();
			}
			//TODO handler errors
    	);

		this.walletApi.getCharactersCharacterIdWallets(this.character.CharacterID, 'tranquility', this.character.access_token).subscribe(
			(walletData: GetCharactersCharacterIdWallets200Ok) => {
				this.walletInfo = walletData;
			},(error)=>{
				console.log(JSON.stringify(error));
			}
			//TODO handler errors
    	);
	}

	private getImages() {
		let imageView: Image = this.characterImage.nativeElement;

		this.eveImageService.getCharacterImage(this.character.CharacterID, Sizes.LARGE).then((img: imageSource.ImageSource)=> {
			imageView.imageSource = img
		});

		if(this.characterInfo.corporation_id) {
			this.eveImageService.getCorporationImage(this.characterInfo.corporation_id, Sizes.MEDIUM).then((img: imageSource.ImageSource)=> {
				let imageView: Image = this.corpImage.nativeElement;
				imageView.imageSource = img
			});
		}

		if(this.characterInfo.alliance_id) {
			this.eveImageService.getAllianceImage(this.characterInfo.alliance_id, Sizes.MEDIUM).then((img: imageSource.ImageSource)=> {
				let imageView: Image = this.allianceImage.nativeElement;
				imageView.imageSource = img
			});
		}
	}

	private getCorpInfo() {
		if(this.characterInfo.corporation_id) {
			this.corporationApi.getCorporationsCorporationId(this.characterInfo.corporation_id).subscribe(
				(corpData: GetCorporationsCorporationIdOk) => {
					this.corpInfo = corpData;
				}
				//TODO handler errors
			);
		}
	}

	private getAllianceInfo() {
		if(this.characterInfo.alliance_id) {
			this.allianceApi.getAlliancesAllianceId(this.characterInfo.alliance_id).subscribe(
				(allianceData: GetAlliancesAllianceIdOk) => {
					this.allianceInfo = allianceData;
				}
				//TODO handler errors
			);
		}
	}
}