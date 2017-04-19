import { Component, OnInit } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'menu',
    templateUrl: 'menu.component.html'
})
export class MenuComponent implements OnInit {
    title: string = "";

    constructor() { }

    ngOnInit() { 
    }
}