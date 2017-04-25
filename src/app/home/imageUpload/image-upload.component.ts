import { Component, OnInit, Injectable, ChangeDetectorRef } from '@angular/core';
import { ElementRef, ViewChild, Renderer } from '@angular/core'

import { User } from './../../_models/user';
import { Image } from './../../_models/image';
import { UserImageSrcs } from './../../_models/userImageSrcs';
import { Router } from '@angular/router';

import { ImageService } from './../../_services/image.service';
import { ImageLocalStorageService } from './../../_services/image-localstorage.service';
import { UserService } from './../../_services/user.service';

@Component({
    moduleId: module.id,
    selector: 'image-upload',
    templateUrl: './image-upload.component.html',
    styleUrls: ['./image-upload.component.css']
})
export class ImageUploadComponent implements OnInit {
    @ViewChild('fileInput') el: ElementRef;

    ngOnInit() { }

    constructor(
        private element: ElementRef,
        private changeDetectorRef: ChangeDetectorRef,
        private imageService: ImageService,
        private imagelsService: ImageLocalStorageService,
        private userService: UserService,
        private router: Router) {
    }

    public file_srcs = [];
    public images: Image[] = [];

    // The next two lines are just to show the resize debug
    // they can be removed
    public debug_size_before: string[] = [];
    public debug_size_after: string[] = [];

    // This is called when the user selects new files from the upload button
    fileChange(input) {
        this.readFiles(input.files);
    }

    readFile(file, reader, callback) {
        // Set a callback funtion to fire after the file is fully loaded
        reader.onload = () => {
            // callback with the results
            callback(reader.result);
        }

        // Read the file
        reader.readAsDataURL(file);
    }

    readFiles(files, index = 0) {
        // Create the file reader
        let reader = new FileReader();

        // If there is a file
        if (index in files) {
            // Start reading this file
            this.readFile(files[index], reader, (result) => {
                // Create an img element and add the image file data to it
                var img = document.createElement("img");
                img.src = result;

                // Send this img to the resize function (and wait for callback)
                this.resize(img, 120, 120, (resized_jpeg, before, after, img) => {
                    // For debugging (size in bytes before and after)
                    this.debug_size_before.push(before);
                    this.debug_size_after.push(after);

                    // Add the resized jpeg img source to a list for preview
                    // This is also the file you want to upload. (either as a
                    // base64 string or img.src = resized_jpeg if you prefer a file). 
                    this.file_srcs.push({
                        image: img,
                        resizedImg: resized_jpeg,
                        indexImg: files[index],
                        name: files[index].name,
                        size: files[index].size
                    });

                    // Read the next file;
                    this.readFiles(files, index + 1);
                });
            });
        } else {
            // When all files are done This forces a change detection
            this.changeDetectorRef.detectChanges();
        }
    }

    resize(img, MAX_WIDTH: number, MAX_HEIGHT: number, callback) {
        // This will wait until the img is loaded before calling this function
        return img.onload = () => {
            console.log("img loaded");
            // Get the images current width and height
            var width = img.width;
            var height = img.height;

            // Set the WxH to fit the Max values (but maintain proportions)
            if (width > height) {
                if (width > MAX_WIDTH) {
                    height *= MAX_WIDTH / width;
                    width = MAX_WIDTH;
                }
            } else {
                if (height > MAX_HEIGHT) {
                    width *= MAX_HEIGHT / height;
                    height = MAX_HEIGHT;
                }
            }

            // create a canvas object
            var canvas = document.createElement("canvas");

            // Set the canvas to the new calculated dimensions
            canvas.width = width;
            canvas.height = height;
            var ctx = canvas.getContext("2d");

            ctx.drawImage(img, 0, 0, width, height);

            // Get this encoded as a jpeg
            // IMPORTANT: 'jpeg' NOT 'jpg'
            var dataUrl = canvas.toDataURL('image/jpeg');

            // callback with the results
            callback(dataUrl, img.src.length, dataUrl.length, img);
        };
    }

    removeImage(i: number) {
        this.file_srcs.splice(i, 1);
    }

    clearAll() {
        this.file_srcs = [];
    }

    save(): void {
        for (let i = 0; i < this.file_srcs.length; i++) {
            let element = this.file_srcs[i];
            let guid = this.guid();
            let newImage: Image = new Image(
                guid,
                element.name,
                element.size,
                '1',
                JSON.parse(this.userService.getUser()).username,
                element.image.src
            );

            this.imagelsService.create(newImage)
                .then((insertedImages) => this.images.push(insertedImages));
        }
        this.clearAll();
        this.router.navigate(['/blockView']);
        $("#uploadId").removeClass("uk-active");
        $("#blockViewId").addClass("uk-active");
    }

    guid() {
        function s4() {
            return Math.floor((1 + Math.random()) * 0x10000)
                .toString(16)
                .substring(1);
        }
        return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
            s4() + '-' + s4() + s4() + s4();
    }
}