export class Image {
    id: number;
    imageName: string;
    fileSize: string;
    checksum: string;
    uploadedUserId: number;
    image: string;

    constructor(imageName: string, fileSize: string, checksum: string, uploadedUserId: number, image: string) {
        this.imageName = imageName;
        this.fileSize = fileSize;
        this.checksum = checksum;
        this.uploadedUserId = uploadedUserId;
        this.image = image;
    }
} 