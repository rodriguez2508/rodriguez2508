import { Component } from '@angular/core';
import { CV_DATA } from '@static-data/cv-data';

@Component({
  selector: 'app-header',
  templateUrl: './header.html',
  styleUrls: ['./header.css']
})
export class Header {
  cvData = CV_DATA;
}