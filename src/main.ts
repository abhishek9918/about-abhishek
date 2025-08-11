import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';
import { register } from 'swiper/element/bundle';

register();
bootstrapApplication(App, appConfig)
  .catch((err) => console.error(err))
  .finally(() => {
    const loader = document.getElementById('app-loader');
    console.log('Loader found?', loader !== null);

    if (loader) {
      loader.style.opacity = '0';
      loader.style.transition = 'opacity 0.5s ease';
      // remove after fade-out animation
      setTimeout(() => {
        loader.remove();
        //   console.log('Loader removed?', !document.getElementById('app-loader'));
      }, 500);
    }
  });
