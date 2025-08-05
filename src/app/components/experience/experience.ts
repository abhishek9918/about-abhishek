import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import AOS from 'aos';
// import 'aos/dist/aos.css';
import { delay } from 'rxjs';
@Component({
  selector: 'app-experience',
  imports: [CommonModule],
  templateUrl: './experience.html',
  styleUrl: './experience.scss',
})
export class Experience implements OnInit, AfterViewInit {
  ngOnInit(): void {}
  ngAfterViewInit(): void {
    AOS.init({
      duration: 100,
      easing: 'ease-in-out',
      once: true,
    });
    setTimeout(() => {
      AOS.refresh();
    }, 100);
  }
  experiences = [
    {
      date: '2023-Present',
      title: 'Senior Software Engineer',
      subtitle: ' Front-end Developer',
      description:
        'In my current role as a Senior Software Engineer, I lead the development of scalable and high-performance front-end solutions. I work extensively with Angular, Tailwind CSS, and other modern technologies to build intuitive and accessible user interfaces. My focus has been on clean design systems, performance optimization, and delivering user-centric web experiences',
      image: 'devs/office-932926_1280.jpg',
      contactLink: '#contacts',
      delay: 500,
    },
    {
      date: '2022-2023',
      title: 'Software Engineer',
      subtitle: 'Developer',
      description:
        'As a Software Engineer, I was responsible for developing and maintaining responsive websites with a strong focus on scalability and performance. I worked on full-stack features, implemented reusable UI components, and ensured cross-browser compatibility. This role helped me solidify my problem-solving skills and deepen my understanding of modern frontend architecture.',
      image: 'devs/programming-593312_1280.jpg',
      contactLink: '#contacts',
      delay: 700,
    },
    {
      date: 'Feb-2022 - Aug-2022',
      title: 'Intern',
      subtitle: 'Developer',
      description:
        'I began my journey as a Front-End Development Intern, where I gained hands-on experience building user interfaces and collaborating within a development team. During this period, I learned the importance of clean code, version control, and responsive design, while working with technologies like HTML, CSS, and Angular.',
      image: 'devs/computer-4795762_640.jpg',
      contactLink: '#contacts',
      delay: 300,
    },
  ];

  trackByFn(index: number, item: any): number {
    return index;
  }
}
