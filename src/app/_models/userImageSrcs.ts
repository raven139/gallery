export class UserImageSrcs {
    userId: number;
    imageId: number;
    imageSrc: string;

    constructor(userId: number, imageId: number, imageSrc: string) {
        this.userId = userId;
        this.imageId = imageId;
        this.imageSrc = imageSrc;
    }
}