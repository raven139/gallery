import { Component, OnInit } from '@angular/core';
import { MenuButtonComponent } from './../../shared/components/menuButton/menu-button.component';
import { Image } from './../../_models/image';
import { ImageService } from './../../_services/image.service';
import { ImageLocalStorageService } from './../../_services/image-localstorage.service';

@Component({
    moduleId: module.id,
    selector: 'table-view',
    templateUrl: 'table-view.component.html'
})
export class TableViewComponent implements OnInit {
    showDialog = false;
    image: Image;
    images: Image[];

    constructor(private imageService: ImageService,
        private imagelsService: ImageLocalStorageService) { }

    ngOnInit(): void {
        this.getImages();
    }

    getImages(): void {
        this.imagelsService
            .getImages()
            .then(images => this.images = images);
    }

    view(image: Image): void {
        this.image = image;
        // this.showDialog = !this.showDialog;
        var lightbox = UIkit.lightbox.create([
            { 'source': image.image, 'type': 'image' }
        ]);

        lightbox.show();
    }

    delete(image: Image): void {
        this.imagelsService
            .delete(image)
            .then(() => {
                this.images.splice(this.images.indexOf(image) - 1, 1);
            });
    }
}