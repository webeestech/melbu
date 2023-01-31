const faders = document.querySelectorAll('.fade-in');
const sliders = document.querySelectorAll('.slide-in');

const appearOptions = {
  threshold: 0,
  rootMargin: '0px 0px -25px 0px',
};

const appearOnScroll = new IntersectionObserver(function (
  entries,
  appearOnScroll
) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return;
    } else {
      entry.target.classList.add('appear');
      appearOnScroll.unobserve(entry.target);
    }
  });
},
appearOptions);

faders.forEach((fader) => {
  appearOnScroll.observe(fader);
});

//---------faders1

const faders1 = document.querySelectorAll('.fade-in1');

const appearOptions1 = {
  threshold: 1,
  rootMargin: '0px 0px -25px 0px',
};

const appearOnScroll1 = new IntersectionObserver(function (
  entries,
  appearOnScroll1
) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return;
    } else {
      entry.target.classList.add('appear1');
      appearOnScroll1.unobserve(entry.target);
    }
  });
},
appearOptions1);

faders1.forEach((fader1) => {
  appearOnScroll1.observe(fader1);
});

//---------faders2

const faders2 = document.querySelectorAll('.fade-in2');

const appearOptions2 = {
  threshold: 1,
  rootMargin: '0px 0px -25px 0px',
};

const appearOnScroll2 = new IntersectionObserver(function (
  entries,
  appearOnScroll2
) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return;
    } else {
      entry.target.classList.add('appear2');
      appearOnScroll2.unobserve(entry.target);
    }
  });
},
appearOptions2);

faders2.forEach((fader2) => {
  appearOnScroll2.observe(fader2);
});

//---------faders3

const faders3 = document.querySelectorAll('.fade-in3');

const appearOptions3 = {
  threshold: 1,
  rootMargin: '0px 0px -25px 0px',
};

const appearOnScroll3 = new IntersectionObserver(function (
  entries,
  appearOnScroll3
) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return;
    } else {
      entry.target.classList.add('appear3');
      appearOnScroll3.unobserve(entry.target);
    }
  });
},
appearOptions3);

faders3.forEach((fader3) => {
  appearOnScroll3.observe(fader3);
});

//---------faders4

const faders4 = document.querySelectorAll('.fade-in4');

const appearOptions4 = {
  threshold: 1,
  rootMargin: '0px 0px -25px 0px',
};

const appearOnScroll4 = new IntersectionObserver(function (
  entries,
  appearOnScroll4
) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return;
    } else {
      entry.target.classList.add('appear4');
      appearOnScroll4.unobserve(entry.target);
    }
  });
},
appearOptions4);

faders4.forEach((fader4) => {
  appearOnScroll4.observe(fader4);
});

//-----------slider
sliders.forEach((slider) => {
  appearOnScroll.observe(slider);
});

/* Carousel */

/* Languages */
const root = document.documentElement;
const marqueeElementsDisplayed = getComputedStyle(root).getPropertyValue(
  '--marquee-elements-displayed'
);
const marqueeContent = document.querySelector('ul.marquee-content');

root.style.setProperty('--marquee-elements', marqueeContent.children.length);

for (let i = 0; i < marqueeElementsDisplayed; i++) {
  marqueeContent.appendChild(marqueeContent.children[i].cloneNode(true));
}
