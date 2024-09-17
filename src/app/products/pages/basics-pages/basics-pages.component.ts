import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-pages',
  templateUrl: './basics-pages.component.html',
  styleUrl: './basics-pages.component.css'
})
export class BasicsPagesComponent {


    public nameLower: string = 'lucas';
    public nameUpper: string = 'LUCAS';
    public fullName: string = 'lUCaS pAGanI';

    public fecha: Date =  new Date();
}
