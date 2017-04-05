import { Component } from '@angular/core';

@Component({
    selector: 'app-error',
    templateUrl: "./error.component.html"

})

export class PageNotFoundComponent {
    pageError:string;
    message:string;
    backHome:string;

    constructor() {
        this.pageError = 'Error 404'
        this.message = 'Page Not Found, please try again'
        this.backHome = 'Back to the home'
    }
}