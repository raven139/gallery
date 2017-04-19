import { Component, OnInit } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'header',
    templateUrl: 'header.component.html',
})
export class HeaderComponent implements OnInit {
    userName: string = 'Андрєєв Сергій Олександрович';
    constructor() { }

    ngOnInit() { }
}