import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appRevealOnScroll]',
})
export class RevealOnScroll {
  private observer!: IntersectionObserver;
  private observerOptions: IntersectionObserverInit = {
    root: null,
    threshold: 0.05,
    rootMargin: '0px',
  };
  constructor(
    private el: ElementRef<HTMLElement>,
    private renderer: Renderer2
  ) {}

  ngOnInit(): void {
    const section = this.el.nativeElement;
    if (!section) return;

    this.renderer.addClass(section, 'section--hidden');

    this.observer = new IntersectionObserver(([entry], obs) => {
      if (entry.isIntersecting) {
        this.renderer.removeClass(section, 'section--hidden');

        this.renderer.addClass(section, 'section--reveal');

        obs.unobserve(section);
      }
    }, this.observerOptions);

    this.observer.observe(section);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}
