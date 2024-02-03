import {Component} from '@angular/core';
import {faGithub} from "@fortawesome/free-brands-svg-icons";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

  protected readonly faGithub = faGithub;
}
