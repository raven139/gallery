import { Component, OnInit } from '@angular/core';

import { Image } from './../_models/image';
import { ImageService } from './../_services/image.service';

@Component({
    moduleId: module.id,
    selector: 'block-view',
    templateUrl: 'block-view.component.html'
})
export class BlockViewComponent implements OnInit {
    images: Image[];

    constructor(private imageService: ImageService) {
    }

    ngOnInit() {
        this.getImages();
    }

    getImages(): void {
        this.imageService
            .getImages()
            .then(images => this.images = images);
    }

    delete(image: Image): void {
        this.imageService
            .delete(image.id)
            .then(() => {
                this.images.splice(this.images.indexOf(image), 1);
            });
    }
}