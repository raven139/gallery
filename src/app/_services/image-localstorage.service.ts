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
        var imgs = <Image[]>JSON.parse(localStorage.getItem("images")) as Image[];
        return Promise.resolve(imgs);
    }

    create(image: Image): Promise<Image> {
        let images: Image[] = [];
        this.getImages().then((res) => {
            console.log(res);
            images = res
            images.push(image);
            localStorage.setItem('images', JSON.stringify(images));
        });

        return Promise.resolve(image);
    }

    // delete(id: number): Promise<any> {
    //     const url = `${this.galleryUrl}/${id}`;
    //     return this.http.delete(url, { headers: this.headers })
    //         .toPromise()
    //         .then(() => null)
    //         .catch(this.handleError);
    // }

    // create(image: Image): Promise<Image> {
    //     return this.http
    //         .post(this.galleryUrl, JSON.stringify(image), { headers: this.headers })
    //         .toPromise()
    //         .then(res => res.json().data as Image)
    //         .catch(this.handleError);
    // }

    private handleError(error: any): Promise<any> {
        debugger;
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }

    private success(): Promise<any> {
        return Promise.resolve();
    }

}