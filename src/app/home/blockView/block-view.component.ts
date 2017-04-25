import { Component, OnInit } from '@angular/core';

import { Image } from './../../_models/image';
import { ImageService } from './../../_services/image.service';
import { ImageLocalStorageService } from './../../_services/image-localstorage.service';

@Component({
    moduleId: module.id,
    selector: 'block-view',
    templateUrl: 'block-view.component.html',
    styleUrls: ['./block-view.component.css']
})
export class BlockViewComponent implements OnInit {
    images: Image[];

    constructor(private imageService: ImageService,
        private imagelsService: ImageLocalStorageService) {
    }

    ngOnInit() {
        this.getImages();
    }

    getImages(): void {
        this.imagelsService
            .getImages()
            .then(images => this.images = images);
    }

    delete(image: Image): void {
        this.imagelsService
            .delete(image)
            .then(() => {
                this.images.splice(this.images.indexOf(image), 1);
            });
    }

    view(image: Image): void {
        var lightbox = UIkit.lightbox.create([
            {
                'source': image.image,
                'type': 'image'
            }
        ]);

        lightbox.show();
    }
}