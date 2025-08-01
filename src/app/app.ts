import {
  AfterViewChecked,
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  signal,
  ViewChild,
} from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { About } from './components/about/about';

declare var anime: any;

import AOS from 'aos';
import 'aos/dist/aos.css';
import { Navbar } from './components/navbar/navbar';
import { Experience } from './components/experience/experience';
import { Skills } from './components/skills/skills';
import { Education } from './components/education/education';
import { Contact } from './components/contact/contact';
import { Projects } from './components/projects/projects';
import { Slider } from './components/slider/slider';
import { Footer } from './components/footer/footer';
@Component({
  selector: 'app-root',
  imports: [
    About,
    Experience,
    Skills,
    Education,
    Contact,
    Navbar,
    Projects,
    Footer,
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App implements OnInit, AfterViewInit, AfterViewChecked {
  title = 'portfolio';
  @ViewChild('navbar', { static: false }) navbar!: ElementRef;
  cards = Array(6).fill(0);
  isSticky = false;
  ngOnInit(): void {
    this.movingLetters();
    this.intersectionObserver();
    this.revealSection();
    this.imgLazyLoad();
  }
  ngAfterViewChecked(): void {}
  ngAfterViewInit(): void {
    this.initializeSlick();
    setTimeout(() => {
      const sections = document.querySelectorAll('section[id]');
      const navItems = document.querySelectorAll<HTMLLIElement>('.nav-item');
      if (!sections.length || !navItems.length) {
        console.warn('No sections or nav items found!');
        return;
      }
      console.log(sections);
    }, 0);
    AOS.init({
      duration: 500,
      delay: 150,
      once: false,
    });
    AOS.refresh();
    this.imgLazyLoad();
  }

  initializeSlick(): void {
    setTimeout(() => {
      const el = $('.portfolio-wrapper');
      if (el.length > 0 && !el.hasClass('slick-initialized')) {
        el.slick({
          dots: false,
          infinite: true,
          autoplay: false,
          autoplaySpeed: 2000,
          slidesToShow: 3,
          slidesToScroll: 1,
          arrows: true,
          prevArrow:
            '<button class="slide-arrow prev-arrow"><i class="feather-arrow-left"></i></button>',
          nextArrow:
            '<button class="slide-arrow next-arrow"><i class="feather-arrow-right"></i></button>',
          responsive: [
            {
              breakpoint: 868,
              settings: {
                slidesToShow: 1,
                arrows: true,
                dots: false,
              },
            },
            {
              breakpoint: 576,
              settings: {
                slidesToShow: 1,
                arrows: false,
                dots: true,
              },
            },
          ],
        });
      }
    }, 0);
  }

  movingLetters() {
    const textWrapper = document.querySelector('.ml9 .letters');
    if (textWrapper) {
      textWrapper.innerHTML = textWrapper.textContent!.replace(
        /\S/g,
        "<span class='letter'>$&</span>"
      );

      anime
        .timeline({ loop: true })
        .add({
          targets: '.ml9 .letter',
          scale: [0, 1],
          duration: 1500,
          elasticity: 600,
          delay: (el: any, i: number) => 45 * (i + 1),
        })
        .add({
          targets: '.ml9',
          opacity: 0,
          duration: 1000,
          easing: 'easeOutExpo',
          delay: 1000,
        });
    }
  }

  private headerObserver!: IntersectionObserver;

  intersectionObserver() {
    const header = document.querySelector('#header_id');
    const nav = document.querySelector('#navbar_id');

    if (!header || !nav) {
      console.error('Header or Navbar not found.');
      return;
    }
    const navHeight = nav.getBoundingClientRect().height;

    const stickyNav = (entries: IntersectionObserverEntry[]) => {
      const [entry] = entries;

      if (!entry.isIntersecting) {
        nav.classList.add('sticky');
      } else {
        nav.classList.remove('sticky');
      }
    };
    this.headerObserver = new IntersectionObserver(stickyNav, {
      root: null,
      threshold: 0.1,
      rootMargin: `${navHeight}px`,
    });

    this.headerObserver.observe(header);
  }

  revealSection() {
    const allSections = document.querySelectorAll('.section');

    const observer = new IntersectionObserver(this.revealSectionFn.bind(this), {
      root: null,
      threshold: 0.05, // try very low on mobile
      rootMargin: '0px',
    });

    allSections.forEach((section: Element) => {
      observer.observe(section);
      section.classList.add('section--hidden');
    });
  }

  revealSectionFn(
    entries: IntersectionObserverEntry[],
    observer: IntersectionObserver
  ) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.remove('section--hidden');
        observer.unobserve(entry.target);
      }
    });
  }

  imgLazyLoad() {
    const imgTargets =
      document.querySelectorAll<HTMLImageElement>('img[data-src]');

    const loadImg = (
      entries: IntersectionObserverEntry[],
      observer: IntersectionObserver
    ) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        const imgElement = entry.target as HTMLImageElement;

        imgElement.src = imgElement.dataset?.['src'] || '';
        imgElement.addEventListener('load', () => {
          imgElement.classList.remove('lazy-img');
        });

        observer.unobserve(entry.target);
      });
    };

    const imgObserver = new IntersectionObserver(loadImg, {
      root: null,
      threshold: 0.1,
      rootMargin: '100px',
    });

    imgTargets.forEach((img) => imgObserver.observe(img));
  }
}
