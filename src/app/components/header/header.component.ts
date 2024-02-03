import {Component, ElementRef, OnInit, Renderer2} from '@angular/core';
import {animate, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [
    trigger(
      'inOutAnimation',
      [
        transition(
          ':enter',
          [
            style({transform: 'translateY(-100%)', opacity: 0}),
            animate('0.3s ease-out',
              style({transform: 'translateY(0%)', opacity: 1}))
          ]
        ),
        transition(
          ':leave',
          [
            style({transform: 'translateY(0%)', opacity: 1}),
            animate('0.3s ease-in',
              style({transform: 'translateY(-100%)', opacity: 0}))
          ]
        )
      ]
    )
  ]
})

export class HeaderComponent implements OnInit {
  showMobileMenu: boolean = false;
  removeListener: (() => void) | null = null;

  constructor(private renderer: Renderer2, private el: ElementRef) {
  }

  toggleMobileMenu() {
    this.showMobileMenu = !this.showMobileMenu;
    if (this.showMobileMenu) {
      this.removeListener = this.renderer.listen(
        'document',
        'click',
        (event) => {
          this.handleGlobalClick(event);
        }
      );
    } else {
      if (this.removeListener != null) {
        this.removeListener();
        this.removeListener = null;
      }
    }
  }

  handleGlobalClick(event
                      :
                      any
  ) {
    const clickedInside = this.el.nativeElement.contains(event.target);

    if (!clickedInside) {
      this.toggleMobileMenu();
    }
  }

  ngOnInit() {
  }

}
