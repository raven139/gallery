import { Component, OnInit } from '@angular/core';
import { MenuButtonComponent } from './../shared/components/menuButton/menu-button.component';
import { Image } from './../_models/image';
import { ImageService } from './../_services/image.service';

@Component({
    moduleId: module.id,
    selector: 'table-view',
    templateUrl: 'table-view.component.html'
})
export class TableViewComponent implements OnInit {
    showDialog = false;
    image: Image;
    images: Image[];

    constructor(private imageService: ImageService) { }

    ngOnInit(): void {
        this.getImages();
    }

    getImages(): void {
        this.imageService
            .getImages()
            .then(images => this.images = images);
    }

    view(image: Image): void {
        this.image = image;
        this.showDialog = !this.showDialog;
    }

    delete(image: Image): void {
        this.imageService
            .delete(image.id)
            .then(() => {
                this.images.splice(this.images.indexOf(image), 1);
            });
    }
}