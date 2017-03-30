import { Injectable } from '@angular/core';
import * as imageSource from 'image-source';
import * as fs from "file-system";
import { ImageFormat } from "ui/enums";

@Injectable()
export class EveImageService {
    private url: string = "https://image.eveonline.com/";
    private imageCachePath:string = "eveMagnateImageCache";

    getAllianceImage(id: number, size:string) {
        return this.getImage("Alliance", id, size);
    }

    getCorporationImage(id: number, size:string) {
        return this.getImage("Corporation", id, size);
    }

    getCharacterImage(id: number, size:string) {
        return this.getImage("Character", id, size, "jpg");
    }

    getInventoryTypeImage(id: number, size:string) {
        return this.getImage("Type", id, size);
    }

    getShipDroneImageRender(id: number, size:string) {
        return this.getImage("Render", id, size);
    }

    private getImage(path: string, id: number, size: string, extension: string = "png") {
        var url =this.url;

        return new Promise((resolve, reject) => {
            let documentsFolder = fs.knownFolders.documents();
            var filename: string = id + "_" + size + "."  + extension
            documentsFolder.getFolder(this.imageCachePath);
            var imgPath: string = fs.path.join(documentsFolder.path, this.imageCachePath, filename);
            
            if(fs.File.exists(imgPath)) {
                var img: imageSource.ImageSource = imageSource.fromFileOrResource("" + imgPath);
                resolve(img);
            } else {
                imageSource.fromUrl(url + path + "/" + filename).then((image: imageSource.ImageSource) => {
                    this.saveImage(image, imgPath, extension);
                    resolve(image);
                }, (error) => {
                    reject(error);
                },);
            }
        });
    }

    private saveImage(img: imageSource.ImageSource, path: string, extension: string) {
        var format:string = "";
        if(extension === "png") {
            format = ImageFormat.png;
        } else {
            format = ImageFormat.jpg;
        } 

        img.saveToFile(path, format);
    }
}

export const Sizes = {
    XLARGE: '512',
    LARGE: '256',
    MEDIUM: '128',
    SMALL: '64',
    XSMALL: '32'
}