import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    moduleId: module.id,
    selector: 'menu-button',
    templateUrl: 'menu-button.component.html'
})
export class MenuButtonComponent implements OnInit {
    constructor(private router: Router) { }

    goToMenu() {
        this.router.navigate(['/']);
    }

    ngOnInit() { }
}
