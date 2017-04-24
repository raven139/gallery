import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Image } from './../_models/image';
import { User } from './../_models/user';
import { UserImageSrcs } from './../_models/userImageSrcs';


@Injectable()
export class ImageLocalStorageService {

    constructor(private http: Http) { }

    getImages(): Promise<Image[]> {
        let imgs = <Image[]>JSON.parse(localStorage.getItem("images")) as Image[];
        if (!imgs)
            imgs = [];
        return Promise.resolve(imgs);
    }

    create(image: Image): Promise<Image> {
        let imgs = <Image[]>JSON.parse(localStorage.getItem("images")) as Image[];
        if (!imgs)
            imgs = [];
        imgs.push(image);
        localStorage.setItem('images', JSON.stringify(imgs));

        return Promise.resolve(image);
    }

    delete(image: Image): Promise<any> {
        let imgs = <Image[]>JSON.parse(localStorage.getItem("images")) as Image[];
        let index = -1;
        for (let i = 0; i < imgs.length; i++) {
            let element = imgs[i];
            if (element.guid == image.guid) {
                index = i;
            }
        }
        imgs.splice(index, 1);
        localStorage.setItem('images', JSON.stringify(imgs));
        return Promise.resolve();
    }

    private handleError(error: any): Promise<any> {
        debugger;
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }

    private success(): Promise<any> {
        return Promise.resolve();
    }

}