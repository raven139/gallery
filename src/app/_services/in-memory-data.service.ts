import { InMemoryDbService } from 'angular-in-memory-web-api';
import { User } from './../_models/user';
import { Image } from './../_models/image';
import { UserImageSrcs } from './../_models/userImageSrcs';
export class InMemoryDataService implements InMemoryDbService {
    createDb() {
        let users: User[] = [
            {
                id: 1,
                name: 'user',
                email: 'user@user.com',
                password: '1111'
            },
        ];
        let images: Image[] = [];
        let userImageSrcs: UserImageSrcs[] = [];
        return { images };
    }
}