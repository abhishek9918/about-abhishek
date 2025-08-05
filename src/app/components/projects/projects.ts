import {
  AfterViewInit,
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  OnInit,
  ViewChild,
} from '@angular/core';
import AOS from 'aos';
import { swiperBreakpoints, WORKS, worksInterface } from './works';
import { Modal } from '../../core/modals/modal/modal';
import { CommonModule } from '@angular/common';
import { register } from 'swiper/element/bundle';
import { Swiper, SwiperOptions } from 'swiper/types';
import SwiperCore from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';

SwiperCore.use([Navigation, Pagination]);
register();
@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, Modal],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class Projects implements AfterViewInit, OnInit {
  @ViewChild('workModal') workModal!: Modal;
  breakPoints = swiperBreakpoints;

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
    AOS.init({ duration: 100, once: true });
    AOS.refresh();
  }

  workObj: any;
  isOpenModal: boolean = false;
  open(work: worksInterface) {
    console.log(work);
    this.workModal.openModal(work);
  }
  close() {
    this.isOpenModal = false;
  }
  obj = {
    title: 'Magic Number Hunt',
    subtitle:
      'A fun browser-based number guessing game built with pure HTML, CSS, and JavaScript.',
    description:
      'Magic Number Hunt is a fast-paced, interactive browser game where players guess a secret number between 1 and 20. Designed with HTML, CSS, and JavaScript, the game provides real-time feedback, tracks the current and high scores, and includes a reset mechanism to replay endlessly. This project demonstrates core frontend development concepts like DOM manipulation, event handling, and conditional logic — wrapped in a clean, user-friendly interface.',
    stack: ['HTML', 'CSS', 'JavaScript'],
    type: 'Game',
    url: 'https://magic-number-hunt.netlify.app',
    img: '/works/start.png',
    id: 0,
  };
}
