import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-technology-icon',
  standalone: true,
  imports: [],
  templateUrl: './technology-icon.component.html',
  styleUrl: './technology-icon.component.scss'
})
export class TechnologyIconComponent {
  @Input() name: string | undefined;
  @Input() backgroundColor: string | undefined;
  @Input() fontColor: string | undefined;

  constructor() {
  }
}
