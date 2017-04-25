export class Image {
    id: number;
    guid: string;
    imageName: string;
    fileSize: string;
    checksum: string;
    uploadedUserId: string;
    image: string;

    constructor(guid: string, imageName: string, fileSize: string, checksum: string, uploadedUserId: string, image: string) {
        this.guid = guid;
        this.imageName = imageName;
        this.fileSize = fileSize;
        this.checksum = checksum;
        this.uploadedUserId = uploadedUserId;
        this.image = image;
    }
} 