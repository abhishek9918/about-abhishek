import { AfterViewInit, Component } from '@angular/core';
import AOS from 'aos';
import { LazyLoadImage } from '../../core/directives/lazy-load-image';
@Component({
  selector: 'app-about',
  imports: [LazyLoadImage],
  templateUrl: './about.html',
  styleUrl: './about.scss',
})
export class About implements AfterViewInit {
  ngAfterViewInit(): void {
    AOS.init({
      duration: 100,
      once: true,
    });
    AOS.refresh();
  }
}
