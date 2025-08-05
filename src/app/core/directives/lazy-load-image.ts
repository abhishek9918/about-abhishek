import { Directive, ElementRef } from '@angular/core';

@Directive({
  standalone: true,
  selector: '[appLazyLoadImage]',
})
export class LazyLoadImage {
  private observer!: IntersectionObserver;

  constructor(private el: ElementRef<HTMLImageElement>) {}

  ngOnInit(): void {
    const img = this.el.nativeElement;

    this.observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          const src = img.dataset['src'];
          if (src) {
            img.src = src;
            img.onload = () => img.classList.remove('lazy-img');
          }

          observer.unobserve(img);
        });
      },
      {
        root: null,
        threshold: 0.1,
        rootMargin: '100px',
      }
    );

    this.observer.observe(img);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}
