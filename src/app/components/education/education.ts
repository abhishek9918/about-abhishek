import { CommonModule, NgOptimizedImage } from '@angular/common';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import AOS from 'aos';
import 'aos/dist/aos.css';
@Component({
  selector: 'app-education',
  imports: [CommonModule],
  templateUrl: './education.html',
  styleUrl: './education.scss',
})
export class Education implements OnInit, AfterViewInit {
  ngOnInit(): void {}
  ngAfterViewInit(): void {
    AOS.init({
      duration: 100,
      once: true,
    });
    AOS.refresh();
  }

  education = [
    {
      date: '2018-2021',
      title: 'Bachelor of Computer Applications',
      subtitle: 'Lucknow Public College of Professional Studies',
      description:
        'Gained foundational knowledge in computer science, programming, and web development. Built multiple academic projects and explored technologies like HTML, CSS, JavaScript, and basic data structures',
      image: 'colg/pexels-emily-ranquist-493228-1205651.jpg',
      contactLink: '#contacts',
      delay: 100,
    },
    {
      date: '2016-2018',
      title: 'Intermediate Education',
      subtitle: 'Saraswati Vidya Mandir Inter College',
      description:
        'Completed higher secondary education with a specialization in science.',
      image: 'colg/pexels-pixabay-301920.jpg',
      contactLink: '#contacts',
      delay: 200,
    },
    {
      date: '2016-2018',
      title: 'Intermediate Education',
      subtitle: 'Saraswati Vidya Mandir Inter College',
      description:
        'Completed higher secondary education with a specialization in science.',
      image: 'colg/pexels-pixabay-301920.jpg',
      contactLink: '#contacts',
      delay: 300,
    },
  ];

  trackByFn(index: number, item: any): number {
    return index;
  }

  onImageLoad(event: Event): void {
    const img = event.target as HTMLImageElement;
    img.classList.add('loaded');
  }
}
