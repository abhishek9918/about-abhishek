import { AfterViewInit, Component } from '@angular/core';
import AOS from 'aos';
@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.html',
  styleUrl: './about.scss',
})
export class About implements AfterViewInit {
  ngAfterViewInit(): void {
    AOS.init({
      duration: 500,
      once: false,
    });
    AOS.refresh();
  }
}
