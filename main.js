'use strict';
(() => {



  class Panel {
    constructor() {
      const section = document.createElement('section');
      section.classList.add('panel');

      this.img = document.createElement('img');
      this.img.src = this.getRandomImage();

      this.timeoutId = undefined

      this.stop = document.createElement('div');
      this.stop.classList.add('stop');
      this.stop.textContent = 'STOP';
      this.stop.addEventListener("click",()=>{
        clearTimeout(this.timeoutId);
      });

      section.appendChild(this.img);
      section.appendChild(this.stop);

      const main = document.querySelector('main');
      main.appendChild(section);
    }

    getRandomImage() {
      const images = ['img/hotate.png', 'img/yamato.png', 'img/kitaro-.png', 'img/ramu.png','img/honoka.png', 'img/to-ma.png', 'img/erika.png', 'img/makoto.png'];

      return images[Math.floor(Math.random() * images.length)];
    }

    spin() {
      this.img.src = this.getRandomImage();
      this.timeoutId = setTimeout(() => {
        this.spin();
      }, 150);
    }
  }

  const panels = [new Panel(), new Panel(), new Panel()];
  

  const spin = document.getElementById('spin');
  spin.addEventListener('click', () => {
    panels.forEach((panel) => {
      panel.spin();
    });
  });
})();
