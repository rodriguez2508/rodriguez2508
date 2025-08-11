import { Component } from '@angular/core';
import { CV_DATA } from '@static-data/cv-data';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.html',
  styleUrl: './footer.scss'
})
export class Footer {

  cvData = CV_DATA;
}
