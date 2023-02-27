const menu = document.querySelector(".menu__burger");
const menuItems = document.querySelectorAll(".menuItem");
const burger= document.querySelector(".burger");
const closeIcon= document.querySelector(".closeIcon");
const menuIcon = document.querySelector(".menuIcon");

function toggleMenu() {
  if (menu.classList.contains("showMenu")) {
    menu.classList.remove("showMenu");
    closeIcon.style.display = "none";
    menuIcon.style.display = "block";
    burger.style.background = '#fafafa';
    document.body.style.overflow = 'auto';
  } else {
    menu.classList.add("showMenu");
    closeIcon.style.display = "block";
    menuIcon.style.display = "none";
    burger.style.background = '#E8EAED';
    document.body.style.overflow = 'hidden';
  }
}

burger.addEventListener("click", toggleMenu);

menuItems.forEach( 
  function(menuItem) { 
    menuItem.addEventListener("click", toggleMenu);
  }
)

new Swiper('.clients-swiper', {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 0,

  breakpoints: {
    990: {
      slidesPerView: 3,
      spaceBetween: 30
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 70
    },
  },

  navigation: {
    nextEl: '.clients-arrow-right',
    prevEl: '.clients-arrow-left',
  },
});

new Swiper('.team-swiper', {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 50,

  breakpoints: {
    990: {
      slidesPerView: 3,
      spaceBetween: 30
    },
    /*768: {
      slidesPerView: 2,
      spaceBetween: 70
    },*/
    498: {
      slidesPerView: 2,
      spaceBetween: 80
    },
  },

  navigation: {
    nextEl: '.team-arrow-right',
    prevEl: '.team-arrow-left',
  },
});


const bookApointment = document.querySelector('.appointment__button');
bookApointment.addEventListener('click', (event) => event.preventDefault());

const footerButton = document.querySelector('.footer__button');
footerButton.addEventListener('click', (event) => event.preventDefault());
