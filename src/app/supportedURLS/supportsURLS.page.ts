import { Component, OnInit } from '@angular/core';
import { DataService } from '../core/data.service';

@Component({
    selector: 'app-supportedURLS',
    templateUrl: 'supportsURLS.page.html',
    styleUrls: ['supportsURLS.page.scss'],
})
export class SupportedURLSPage implements OnInit  {
    supportedURLS: [];

    constructor(public dataService: DataService) { }

    ngOnInit() {
        this.dataService.getSupportedURLs().subscribe((response) => {
            if (typeof response == 'undefined')
                 return;

            this.supportedURLS = response;
       },
       error => {
            //this.handleError(null, Response, error);
       });
    }

    // Used to prevent the entire DOM tree from being re-rendered every time that there is a change
    trackByFn(index, item) {
       return index; // or item.id
    } 
}