import { Component, OnInit } from '@angular/core';
import { UserService } from './../../_services/user.service';

@Component({
    moduleId: module.id,
    selector: 'header',
    templateUrl: 'header.component.html',
})
export class HeaderComponent implements OnInit {
    userName: string = '';

    constructor(private userService: UserService) {
        let a = JSON.parse(userService.getUser());
        if (a)
            this.userName = a.username;
    }

    ngOnInit() { }
}