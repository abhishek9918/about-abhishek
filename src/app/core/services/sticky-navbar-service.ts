import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StickyNavbarService {
  private observer!: IntersectionObserver;

  initStickyNavbar(headerId: string, navbarId: string): void {
    const header = document.querySelector(headerId);
    const nav = document.querySelector(navbarId);
    if (!header || !nav) return;

    const navHeight = nav.getBoundingClientRect().height;
    this.observer = new IntersectionObserver(
      ([entry]) => {
        nav.classList.toggle('sticky', !entry.isIntersecting);
      },
      {
        root: null,
        threshold: 0.1,
        rootMargin: `${navHeight}px`,
      }
    );

    this.observer.observe(header);
  }

  destroy(): void {
    this.observer?.disconnect();
  }
}
