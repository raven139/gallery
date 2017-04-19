import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Image } from './../_models/image';
import { User } from './../_models/user';
import { UserImageSrcs } from './../_models/userImageSrcs';


@Injectable()
export class ImageService {
    private headers = new Headers({ 'Content-Type': 'application/json' });
    private galleryUrl = 'api/images';  // URL to web api

    constructor(private http: Http) { }

    getImages(): Promise<Image[]> {
        return this.http.get(this.galleryUrl)
            .toPromise()
            .then(response => response.json().data as Image[])
            .catch(this.handleError);
    }

    delete(id: number): Promise<any> {
        const url = `${this.galleryUrl}/${id}`;
        return this.http.delete(url, { headers: this.headers })
            .toPromise()
            .then(() => null)
            .catch(this.handleError);
    }

    create(image: Image): Promise<Image> {
        return this.http
            .post(this.galleryUrl, JSON.stringify(image), { headers: this.headers })
            .toPromise()
            .then(res => res.json().data as Image)
            .catch(this.handleError);
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