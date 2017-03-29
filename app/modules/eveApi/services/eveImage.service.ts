import { Injectable } from '@angular/core';
import * as imageSource from 'image-source';

@Injectable()
export class EveImageService {
    url: string = "https://image.eveonline.com/";

    getAllianceImage(id: string, size:string) {
        return this.getImage("Alliance", id, size);
    }

    getCorporationImage(id: string, size:string) {
        return this.getImage("Corporation", id, size);
    }

    getCharacterImage(id: string, size:string) {
        return this.getImage("Character", id, size, "jpg");
    }

    getInventoryTypeImage(id: string, size:string) {
        return this.getImage("Type", id, size);
    }


    private getImage(path: string, id: string, size: string, extension: string = "png") {
        let url = path + "/" + id + "_" + size + "."  + extension
        return imageSource.fromUrl(url);
    }
}

export const Sizes = {
    XLARGE: 512,
    LARGE: 256,
    MEDIUM: 128,
    SMALL: 64,
    XSMALL: 32
}