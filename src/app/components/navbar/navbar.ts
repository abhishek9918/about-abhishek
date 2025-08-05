import { AfterViewInit, Component, HostListener, OnInit } from '@angular/core';
import { LazyLoadImage } from '../../core/directives/lazy-load-image';
declare var $: any;
@Component({
  selector: 'app-navbar',
  imports: [LazyLoadImage],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class Navbar implements OnInit, AfterViewInit {
  ngOnInit(): void {
    this.setupIntersectionObserver2();
    this.toggleMenu();
    this.closeMenu();
  }

  ngAfterViewInit(): void {
    const sections = document.querySelectorAll<HTMLElement>('.section');
    const navLinks = document.querySelectorAll<HTMLAnchorElement>('.nav-link');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const id = entry.target.getAttribute('id');

          if (entry.isIntersecting && id) {
            navLinks.forEach((link) => {
              const li = link.closest('li');
              if (li) li.classList.remove('current');

              if (link.getAttribute('href') === `#${id}`) {
                if (li) li.classList.add('current');
              }
            });
          }
        });
      },
      {
        root: null,
        threshold: 0.1,
        rootMargin: '0px 0px -60% 0px',
      }
    );

    sections.forEach((section) => observer.observe(section));
  }

  setupIntersectionObserver2() {
    const headerSentinel = document.getElementById('rn-header haeder-default');
  }

  isMenuOpen: boolean = false;
  overflowStyle: string = '';

  toggleMenu(): void {
    const model: any = document.getElementById('menuBtn');
    const openModel = document.querySelector('.popup-mobile-menu');

    if (openModel) {
      model.addEventListener('click', () => {
        openModel.classList.add('menu-open');
      });
    }
  }

  closeMenu(): void {
    const closeModel = document.querySelector('.close-button');
    const model: any = document.querySelector('.popup-mobile-menu');

    if (closeModel) {
      closeModel.addEventListener('click', () => {
        model.classList.remove('menu-open');
      });
    }
  }

  toggleSubmenu(event: Event, submenu: HTMLElement): void {
    event.preventDefault();
    submenu.classList.toggle('active');
  }

  @HostListener('document:click', ['$event'])
  closeOnOutsideClick(event: Event): void {
    const target = event.target as HTMLElement;
    if (!target.closest('.popup-mobile-menu') && this.isMenuOpen) {
      this.closeMenu();
    }
  }
}
