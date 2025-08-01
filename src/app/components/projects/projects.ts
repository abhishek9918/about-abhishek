import {
  AfterViewInit,
  Component,
  HostListener,
  OnInit,
  ViewChild,
} from '@angular/core';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { WORKS, worksInterface } from './works';
import { Modal } from '../../core/modals/modal/modal';
import { CommonModule } from '@angular/common';
import $ from 'jquery';
import 'slick-carousel';

@Component({
  selector: 'app-projects',
  imports: [CommonModule, Modal],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class Projects implements AfterViewInit, OnInit {
  @ViewChild('workModal') workModal!: Modal;

  works: worksInterface[] = WORKS;
  ngOnInit(): void {
    this.renderWorks();
  }
  renderWorks() {
    const mappedAr = this.works.map((e: worksInterface, index) => {
      return {
        ...e,
        id: index,
      };
    });
    this.works = mappedAr;
  }
  ngAfterViewInit(): void {
    AOS.init({ duration: 500, once: false });
    AOS.refresh();

    const retryInterval = setInterval(() => {
      const el = $('.portfolio-wrapper');
      if (
        el.length > 0 &&
        !el.hasClass('slick-initialized') &&
        this.works.length > 0
      ) {
        this.initializeSlick();
        clearInterval(retryInterval); // Once it's initialized, stop checking
      }
    }, 200);
  }
  initializeSlick(): void {
    const el = $('.portfolio-wrapper') as any;
    if (
      el.length > 0 &&
      !el.hasClass('slick-initialized') &&
      this.works.length > 0
    ) {
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
      el.on('init', () => {
        console.log('Slick initialized successfully');
      });
    } else {
      console.error(
        'Slick initialization failed: Element not found or no works data'
      );
    }
  }

  workObj: any;
  isOpenModal: boolean = false;
  open(work: worksInterface) {
    if (work) {
      this.workModal.openModal(work);
    }
  }
  close() {
    this.isOpenModal = false;
  }
}
