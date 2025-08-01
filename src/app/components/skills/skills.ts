import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import AOS from 'aos';
import 'aos/dist/aos.css';
@Component({
  selector: 'app-skills',
  imports: [CommonModule],
  templateUrl: './skills.html',
  styleUrl: './skills.scss',
})
export class Skills implements OnInit, AfterViewInit {
  skills = [
    {
      title: 'ReactJs',
      image: 'skill/4373284_angular_logo_logos_icon (1).png',
      delay: 100,
    },
    {
      title: 'Figma',
      image: 'skill/9073968_graphql_icon.png',
      delay: 200,
    },
    {
      title: 'XD',
      image: 'skill/graphql-icon.png',
      delay: 300,
    },
    {
      title: 'PS',
      image: 'skill/vue-js-icon.png',
      delay: 400,
    },
    {
      title: 'VueJS',
      image: 'skill/1012818_code_development_logo_nodejs_icon.png',
      delay: 100,
    },
    {
      title: 'JS',
      image: 'skill/9055799_bxl_tailwind_css_icon.png',
      delay: 200,
    },
    {
      title: 'AngularJS',
      image: 'skill/8546808_bootstrap_icon.png',
      delay: 300,
    },
  ];

  ngAfterViewInit(): void {
    AOS.init({
      duration: 500,
      once: false,
    });
    AOS.refresh();
  }
  cards = [
    {
      title: 'Card 1',
      description: 'This is the description for card 1.',
      image: './../../../assets/skill/4373284_angular_logo_logos_icon (1).png',
    },
    {
      title: 'Card 2',
      description: 'This is the description for card 2.',
      image: './../../../assets/skill/8546808_bootstrap_icon.png',
    },
    {
      title: 'Card 3',
      description: 'This is the description for card 3.',
      image: './../../../assets/skill/vue-js-icon.png',
    },
    {
      title: 'Card 4',
      description: 'This is the description for card 4.',
      image: './../../../assets/skill/4373284_angular_logo_logos_icon (1).png',
    },
  ];
  ngOnInit(): void {}
}
