import {Component} from '@angular/core';
import {technologyIcons} from "../../../constants";

@Component({
  selector: 'app-projects-page',
  templateUrl: './projects-page.component.html',
  styleUrl: './projects-page.component.scss'
})
export class ProjectsPageComponent {
  technologies = technologyIcons;
  webDevTechs = this.technologies.filter(tech => tech.name === "Angular"
    || tech.name === "Bootstrap" || tech.name === "Tailwind" || tech.name === "Typescript" || tech.name === "Javascript");
  backendTechs = this.technologies.filter(tech => tech.name === "Java" || tech.name === "Spring Boot" || tech.name === "Hibernate"
    || tech.name === "Node.js" || tech.name === "AWS Lambda" || tech.name === "S3");
  gameDevTechs = this.technologies.filter(tech => tech.name === "Unreal Engine 5" || tech.name === "C++");
  mobileDevTechs = this.technologies.filter(tech => tech.name === "Android" || tech.name === "Kotlin" || tech.name === "Java");

  constructor() {
  }
}
