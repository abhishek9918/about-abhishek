import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, OnInit } from '@angular/core';
declare var anime: any;

import AOS from 'aos';
import { TextAnimator } from '../../core/services/text-animator';
// import 'aos/dist/aos.css';
@Component({
  selector: 'app-footer',
  imports: [CommonModule],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class Footer implements OnInit, AfterViewInit {
  constructor(private textAnimator: TextAnimator) {}
  ngAfterViewInit(): void {
    this.textAnimator.movingLetters('.ml9 .letters');
  }
  ngOnInit(): void {}
}
