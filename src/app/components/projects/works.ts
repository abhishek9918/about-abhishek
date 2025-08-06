export const WORKS = [
  {
    title: 'Magic Number Hunt',
    subtitle:
      'A fun browser-based number guessing game built with pure HTML, CSS, and JavaScript.',
    description:
      'Magic Number Hunt is a fast-paced, interactive browser game where players guess a secret number between 1 and 20. Designed with HTML, CSS, and JavaScript, the game provides real-time feedback, tracks the current and high scores, and includes a reset mechanism to replay endlessly. This project demonstrates core frontend development concepts like DOM manipulation, event handling, and conditional logic — wrapped in a clean, user-friendly interface.',
    stack: ['HTML', 'CSS', 'JavaScript'],
    type: 'Game',
    url: 'https://magic-number-hunt.netlify.app',
    img: '/works/start.png',
  },
  {
    title: 'Pig Dice Game',
    subtitle: 'A two-player turn-based dice game built with pure JavaScript.',
    description:
      'Pig Dice Game is an interactive two-player browser game where players take turns rolling a dice to reach a target score. The game includes turn tracking, score holding, and instant win detection — all styled with responsive CSS and powered by JavaScript logic. This project highlights the use of DOM manipulation, control flow, and event-driven programming, while also focusing on intuitive UI design and user feedback.',
    stack: ['HTML', 'CSS', 'JavaScript'],
    type: 'Game',
    url: 'https://roll-and-hold.netlify.app',
    img: '/works/Screenshot-2021-11-25-at-1-34-38-PM.png',
  },
  {
    title: 'Tic Tac Toe',
    subtitle:
      'A modern take on the classic 2-player game using HTML, CSS, and JavaScript.',
    description:
      'Tic Tac Toe is a responsive, browser-based game built with vanilla JavaScript. It supports two-player mode on a single device, with dynamic win detection, draw logic, and instant replay. The game layout is mobile-friendly and designed with a clean UI. This project demonstrates key frontend concepts such as grid layouts, conditional logic, event handling, and game state management.',
    stack: ['HTML', 'CSS', 'JavaScript'],
    type: 'Game',
    url: 'https://your-tic-tac-toe-url.netlify.app',
    img: '/works/preview-1024x558.png',
  },
  {
    title: 'TickTask',
    subtitle:
      'A stylish React-based ToDo dashboard with task management features.',
    description:
      'TickTask is a productivity-focused ToDo app built using React, Vite, and Tailwind CSS. It features a visually appealing dashboard with task summary cards, a task creation form, responsive layout, and interactive modals. The app showcases organized task tracking with priority, deadlines, and progress indicators. It demonstrates key frontend skills like component-based design, form handling, and UI transitions.',
    stack: ['React', 'Vite', 'Tailwind CSS'],
    type: 'Productivity App',
    url: 'https://tick-master.netlify.app/', // replace with your actual deployed link
    img: '/Screenshot 2025-08-06 204915.png', // update with your actual preview image path
  },
];

export interface worksInterface {
  id?: number;
  title: string;
  subtitle: string;
  description: string;
  stack: string[];
  type: string;
  url: string;
  img: string;
}

export const slickConfig = {
  slidesToShow: 3,
  slidesToScroll: 1,
  dots: true,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 2000,
  arrows: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};
export const swiperBreakpoints = {
  '0': { slidesPerView: 1 },
  '768': { slidesPerView: 2 },
  '1124': { slidesPerView: 3 },
};
