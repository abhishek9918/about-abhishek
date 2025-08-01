import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import 'slick-carousel'; // Import slick-carousel for type definitions

import $ from 'jquery';
interface SlickEvent {
  // Minimal interface for Slick events; extend as needed
  type: string;
}

interface Slick {
  // Minimal interface for Slick instance; extend as needed
  slideCount: number;
  currentSlide: number;
}
@Component({
  selector: 'app-slider',
  imports: [CommonModule],
  templateUrl: './slider.html',
  styleUrl: './slider.scss',
})
export class Slider {
  @ViewChild('slickCarousel', { static: false }) slickCarousel!: ElementRef;

  works = [
    { img: 'http://placehold.it/350x150/000000', title: 'Slide 1' },
    { img: 'http://placehold.it/350x150/111111', title: 'Slide 2' },
    { img: 'http://placehold.it/350x150/333333', title: 'Slide 3' },
    { img: 'http://placehold.it/350x150/333333', title: 'Slide 3' },
  ];
  // works = [
  //   {
  //     img: 'https://images.unsplash.com/photo-1560011316-77f3185ec566?q=80&w=1333&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  //     title: 'PHP with app landing design & Services',
  //   },
  //   { img: 'https://images.unsplash.com/photo-1560011316-77f3185ec566?q=80&w=1333&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', title: 'Figma Design Project' },
  //   { img: 'https://images.unsplash.com/photo-1560011316-77f3185ec566?q=80&w=1333&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', title: 'CSS Animations Showcase' },
  // ];
  ngOnInit(): void {}
  ngAfterViewInit(): void {
    this.initializeSlick();
  }

  initializeSlick(): void {
    const $carousel = $(this.slickCarousel.nativeElement);
    $carousel.slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      dots: true,
      infinite: true,
      autoplay: true,
      autoplaySpeed: 2000,
      prevArrow: '<button type="button" class="slick-prev">←</button>',
      nextArrow: '<button type="button" class="slick-next">→</button>',
      responsive: [
        { breakpoint: 1024, settings: { slidesToShow: 2 } },
        { breakpoint: 600, settings: { slidesToShow: 1 } },
      ],
    });

    // Event handlers with typed parameters
    $carousel.on('init', (_event: SlickEvent, slick: Slick) => {
      console.log('Slick initialized with', slick.slideCount, 'slides');
    });

    $carousel.on(
      'beforeChange',
      (_event: SlickEvent, _slick: Slick, _current: number, next: number) => {
        console.log(`Changing to slide ${next + 1}`); // 1-based index for logs
      }
    );
  }

  addSlide(): void {
    const newSlide = {
      img: `http://placehold.it/350x150/${Math.floor(Math.random() * 1000000)}`,
      title: `Slide ${this.works.length + 1}`,
    };
    this.works = [...this.works, newSlide];
    $(this.slickCarousel.nativeElement).slick(
      'slickAdd',
      `
      <div class="slide">
        <img src="${newSlide.img}" alt="${newSlide.title}" width="100%">
        <h3>${newSlide.title}</h3>
      </div>
    `
    );
  }

  removeSlide(): void {
    if (this.works.length > 0) {
      this.works = this.works.slice(0, -1);
      $(this.slickCarousel.nativeElement).slick(
        'slickRemove',
        this.works.length
      );
    }
  }

  trackByFn(index: number, slide: any): string {
    return slide.img;
  }
}
