import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
declare var anime: any;

import AOS from 'aos';
import 'aos/dist/aos.css';
@Component({
  selector: 'app-footer',
  imports: [CommonModule],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class Footer implements OnInit {
  ngOnInit(): void {
    this.movingLetters();
  }
  movingLetters() {
    const textWrapper = document.querySelector('.ml11 .letters'); // ✅ changed from .ml9 to .ml11
    if (textWrapper) {
      textWrapper.innerHTML = textWrapper.textContent!.replace(
        /\S/g,
        "<span class='letter'>$&</span>"
      );
      const lineWidth = textWrapper?.getBoundingClientRect().width ?? 0;
      const paddingLeft = parseFloat(
        getComputedStyle(textWrapper!).paddingLeft || '0'
      );

      anime
        .timeline({ loop: true })
        .add({
          targets: '.ml11 .line',
          scaleY: [0, 1],
          opacity: [0.5, 1],
          easing: 'easeOutExpo',
          duration: 700,
        })
        .add({
          targets: '.ml11 .line',
          translateX: [0, lineWidth + paddingLeft + 10],
          easing: 'easeOutExpo',
          duration: 700,
          delay: 100,
        })
        .add({
          targets: '.ml11 .letter',
          opacity: [0, 1],
          easing: 'easeOutExpo',
          duration: 600,
          offset: '-=775',
          delay: (el: any, i: any) => 34 * (i + 1),
        })
        .add({
          targets: '.ml11',
          opacity: 0,
          duration: 1000,
          easing: 'easeOutExpo',
          delay: 1000,
        });
    }
  }
}
