const lorem = (num = 3, cap = true, result = '') => {
  if (num <= 0) {
    result = result.trim();
    return result[result.length - 1] === '.' ? result.slice(0, -1) : result;
  }
  const text = 'lorem ipsum dolor sit amet consectetur adipisicing elit repellat iure sint et eligendi expedita modi itaque mollitia exercitationem perferendis voluptates accusamus reprehenderit velit quae delectus ducimus sit ab facere'.split(' ');
  const rand = Math.floor(Math.random() * (text.length - 1));
  const word = text[rand];
  if (cap) {
    result += `${word[0].toUpperCase()}${word.slice(1)}`
  } else {
    result += word;
  }
  if (!Math.round(Math.random() * 2) && !cap) {
    result += '. ';
    cap = true;
  } else {
    result += ' ';
    cap = false;
  }
  return lorem(--num, cap, result);
}

const stopSvg = `<svg width="12" height="11" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="12" height="11" fill="#18CFAB"/>
</svg>`

const chainSvg = `<svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M13.9131 2.72817L12.0948 0.891285C11.2902 0.0808612 9.98305 0.0759142 9.17681 0.882615L7.15921 2.89256C6.35161 3.69885 6.34818 5.01032 7.15051 5.82074L8.30352 4.68897C8.18678 4.32836 8.33041 3.9153 8.61593 3.62946L9.89949 2.35187C10.3061 1.94624 10.9584 1.94913 11.3595 2.35434L12.4513 3.45805C12.8528 3.86283 12.8511 4.51713 12.447 4.92318L11.1634 6.20241C10.8918 6.47296 10.4461 6.62168 10.1002 6.52626L8.97094 7.65887C9.77453 8.47177 11.0803 8.47466 11.8889 7.66837L13.9039 5.65924C14.7141 4.85254 14.7167 3.53983 13.9131 2.72817ZM6.52613 10.0918C6.62191 10.4441 6.46857 10.8997 6.19093 11.1777L4.99227 12.3752C4.58074 12.7845 3.91595 12.7833 3.50671 12.369L2.39297 11.2475C1.98465 10.8349 1.98729 10.1633 2.39824 9.75473L3.59804 8.55769C3.89032 8.26607 4.31044 8.12025 4.67711 8.24375L5.83354 7.0715C5.01493 6.2462 3.68249 6.24207 2.86059 7.06324L0.915197 9.0042C0.0922615 9.8266 0.0883685 11.1629 0.90651 11.9886L2.75817 13.8618C3.57595 14.6846 4.90724 14.6912 5.73111 13.8701L7.67649 11.9287C8.49852 11.1054 8.5024 9.77166 7.68553 8.9443L6.52613 10.0918ZM6.25787 9.56307C5.98013 9.84189 5.53427 9.84105 5.26179 9.55812C4.98792 9.27434 4.9901 8.82039 5.26613 8.53993L8.59075 5.16109C8.86679 4.88227 9.31174 4.88311 9.58513 5.16398C9.86048 5.44569 9.85876 5.90088 9.5817 6.18299L6.25787 9.56307Z" fill="#18CFAB"/>
</svg>`

const workPhotos = [{
  cat: 'Inspiration',
  src: './img/work-01.jpg'
}, {
  cat: 'Design',
  src: './img/work-02.jpg'
}, {
  cat: 'Design',
  src: './img/work-03.jpg'
}, {
  cat: 'Design',
  src: './img/work-04.jpg'
}, {
  cat: 'Abstract',
  src: './img/work-05.jpg'
}, {
  cat: 'Abstract',
  src: './img/work-06.jpg'
}, {
  cat: 'Inspiration',
  src: './img/work-07.jpg'
}, {
  cat: 'Inspiration',
  src: './img/work-08.jpg'
}, {
  cat: 'Abstract',
  src: './img/work-09.jpg'
}, {
  cat: 'Abstract',
  src: './img/work-10.jpg'
}, {
  cat: 'Inspiration',
  src: './img/work-11.jpg'
}, {
  cat: 'Design',
  src: './img/work-12.jpg'
}, {
  cat: 'Scenery',
  src: './img/work-13.jpg'
}, {
  cat: 'Inspiration',
  src: './img/work-14.jpg'
}, {
  cat: 'Inspiration',
  src: './img/work-15.jpg'
}, {
  cat: 'Scenery',
  src: './img/work-16.jpg'
}, {
  cat: 'Abstract',
  src: './img/work-17.jpg'
}, {
  cat: 'Inspiration',
  src: './img/work-18.jpg'
}, {
  cat: 'Inspiration',
  src: './img/work-19.jpg'
}, {
  cat: 'Abstract',
  src: './img/work-20.jpg'
}, {
  cat: 'Abstract',
  src: './img/work-21.jpg'
}, {
  cat: 'Design',
  src: './img/work-22.jpg'
}, {
  cat: 'Inspiration',
  src: './img/work-23.jpg'
}, {
  cat: 'Inspiration',
  src: './img/work-24.jpg'
}, {
  cat: 'Design',
  src: './img/work-25.jpg'
}, {
  cat: 'Design',
  src: './img/work-26.jpg'
}, {
  cat: 'Abstract',
  src: './img/work-27.jpg'
}, {
  cat: 'Abstract',
  src: './img/work-28.jpg'
}, {
  cat: 'Inspiration',
  src: './img/work-29.jpg'
}, {
  cat: 'Scenery',
  src: './img/work-30.jpg'
}, {
  cat: 'Abstract',
  src: './img/work-31.jpg'
}, {
  cat: 'Abstract',
  src: './img/work-32.jpg'
}, {
  cat: 'Inspiration',
  src: './img/work-33.jpg'
}, {
  cat: 'Design',
  src: './img/work-34.jpg'
}, {
  cat: 'Scenery',
  src: './img/work-35.jpg'
}, {
  cat: 'Inspiration',
  src: './img/work-36.jpg'
}];

const servicePosts = [{
  tab: 'Web Design',
  src: './img/web-design1.jpg',
  text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adip isicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
}, {
  tab: 'Graphic Design',
  src: './img/web-design2.jpg',
  text: 'Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adip isicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet.'
}, {
  tab: 'Online Support',
  src: './img/web-design3.jpg',
  text: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adip isicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet. Consectetur adipisicing elit.'
}, {
  tab: 'App Design',
  src: './img/web-design4.jpg',
  text: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adip isicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet. Consectetur adipisicing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
}, {
  tab: 'Online Marketing',
  src: './img/web-design5.jpg',
  text: 'Sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adip isicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet. Consectetur adipisicing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Excepteur sint occaecat cupidatat non proident.'
}, {
  tab: 'Seo Service',
  src: './img/web-design6.jpg',
  text: 'Mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adip isicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet. Consectetur adipisicing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.'
}];

const clientsQuotations = [{
  name: 'Abraham',
  prof: lorem(2),
  text: lorem(Math.floor(5 + Math.random() * 10)),
  img: './img/client-1.jpg'
}, {
  name: 'Angelina',
  prof: lorem(2),
  text: lorem(Math.floor(5 + Math.random() * 10)),
  img: './img/client-2.jpg'
}, {
  name: 'Ofelia',
  prof: lorem(2),
  text: lorem(Math.floor(5 + Math.random() * 10)),
  img: './img/client-3.jpg'
}, {
  name: 'Pepa',
  prof: lorem(2),
  text: lorem(Math.floor(5 + Math.random() * 10)),
  img: './img/client-4.jpg'
}]

const bestImages = [
  './img/bi-17.jpg',
  './img/bi-18.jpg',
  './img/bi-19.jpg',
  './img/bi-20.jpg'
]