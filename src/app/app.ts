import {
  AfterViewInit,
  Component,
  NgZone,
  OnDestroy,
  ViewChild,
  ElementRef,
  CUSTOM_ELEMENTS_SCHEMA,
} from '@angular/core';
import AOS from 'aos';
import { About } from './components/about/about';
import { Navbar } from './components/navbar/navbar';
import { Experience } from './components/experience/experience';
import { Skills } from './components/skills/skills';
import { Education } from './components/education/education';
import { Contact } from './components/contact/contact';
import { Projects } from './components/projects/projects';
import { Footer } from './components/footer/footer';
import { StickyNavbarService } from './core/services/sticky-navbar-service';
import { LazyLoadImage } from './core/directives/lazy-load-image';
import { RevealOnScroll } from './core/directives/reveal-on-scroll';
import { TextAnimator } from './core/services/text-animator';

declare var anime: any;

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    About,
    Experience,
    Skills,
    Education,
    Contact,
    Navbar,
    Projects,
    Footer,
    LazyLoadImage,
    RevealOnScroll,
  ],
  templateUrl: './app.html',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  styleUrl: './app.scss',
})
export class App implements AfterViewInit, OnDestroy {
  title = 'portfolio';
  @ViewChild('navbar', { static: false }) navbar!: ElementRef;
  // private headerObserver!: IntersectionObserver;
  // private sectionObserver!: IntersectionObserver;
  // private imageObserver!: IntersectionObserver;

  constructor(
    private stickyService: StickyNavbarService,
    private ngZone: NgZone,
    private textAnimator: TextAnimator
  ) {}

  ngAfterViewInit(): void {
    this.ngZone.runOutsideAngular(() => {
      this.stickyService.initStickyNavbar('#header_id', '#navbar_id');
      this.textAnimator.animateLetters('.ml9 .letters');
      AOS.init({ duration: 100, delay: 150, once: true });
      AOS.refresh();
    });
  }

  ngOnDestroy(): void {
    this.stickyService.destroy();

    // this.headerObserver?.disconnect();
    // this.sectionObserver?.disconnect();
    // this.imageObserver?.disconnect();
  }
}
