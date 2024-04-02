import { Component } from '@angular/core';
import { SecondPageChildComponent } from './second-page-child/second-page-child.component';

@Component({
  selector: 'app-second-page',
  standalone: true,
  imports: [SecondPageChildComponent],
  templateUrl: './second-page.component.html',
  styleUrl: './second-page.component.css'
})
export class SecondPageComponent {

}
