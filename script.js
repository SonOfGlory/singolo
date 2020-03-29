/* ======= Header menu part ===== */

document.addEventListener('scroll', onscroll);
const headerMenu = document.querySelector("body > header > ul");

onscroll = () => {
  const scrollPosition = window.scrollY;
  const allParts = document.querySelectorAll('body > header, body > main > section, body > footer'); /* body > header,  */

  allParts.forEach(element => {
    if ((scrollPosition + header.offsetHeight) > element.offsetTop && scrollPosition < (element.offsetTop + element.offsetHeight)) {
      headerMenu.querySelectorAll('li > a').forEach(a => {
        a.classList.remove('menu-active');
        if ((element.getAttribute('id') === a.getAttribute('href').substring(1)) || (element.getAttribute('id') === a.getAttribute('data-home'))) {
          a.classList.add('menu-active');
        }
      })
    }
  });
}

/* === Toggler low-resolution === */

const menu_toggler = document.querySelector("#header > div.menu-toggler");
const menu_togglers_set = document.querySelectorAll('[data-menuswitch]');

menu_toggler.onclick = () => {
  if (document.querySelectorAll('[data-menuswitch="hidden"]').length === 0) {
    menu_togglers_set.forEach(toggler => {
      toggler.dataset.menuswitch = 'hidden';
    }
  )}
  else menu_togglers_set.forEach(toggler => {
      toggler.dataset.menuswitch = '';
    }
  )
}


/* document.querySelector("#header > ul").addEventListener('blur', onblur); 
onblur = () => {
  console.log("blur")
menu_togglers_set.forEach(toggler => {
  toggler.dataset.menuswitch = '';
}
)}; */

/* ====== Slider menu part ==== */

const slider_buttons = document.querySelectorAll('.slider_button')
const slide_container = document.querySelector('.carousele')
const slider_elements = document.querySelectorAll('.carousele>div')

slider_elements[0].classList.add('current')
slider_elements[0].dataset.show = 'current'
slider_elements[1].dataset.show = 'right'

slider_buttons.forEach(button => button.onclick = slideBtnHandler)

function slideBtnHandler(e) {
  if (slide_container.classList.contains('busy')) return

  const current_slide = document.querySelector('.slide[data-show=current]')
  const new_slide = document.querySelector('.slide:not([data-show=current])')
  const direction = this.dataset.arrow=='right'? 'left' : 'right'

  new_slide.dataset.show = this.dataset.arrow

  setTimeout(function () {
    slide_container.classList.add('busy')
    current_slide.dataset.show = direction
    /* add backgroung shifting */
    if (document.querySelector('#slider').classList.contains('blue')) { document.querySelector('#slider').classList.remove('blue')}
    else document.querySelector('#slider').classList.add('blue')
    /* /add backgroung shifting */
    new_slide.dataset.show = 'current'
    new_slide.ontransitionend = function () {
      slide_container.classList.remove('busy')
    }
  }, 50)
}

const selected_iPhones = document.querySelectorAll(".iphone-case");
selected_iPhones.forEach(phoneCase => phoneCase.onclick = phoneScreenHandler);

function phoneScreenHandler(event) {
  //checking few classes at once
  const classNames = ['screen', 'button', 'square-btn-image'];
  if (classNames.some(className => event.target.classList.contains(className))) {
    const screen = event.target.parentNode.querySelector('.screen');
    if (screen.classList.contains('screen-off')) screen.classList.remove('screen-off')
    else screen.classList.add('screen-off')
  }
}

// const slider = document.querySelector("#slider");
// var Height = slider.offsetHeight;
// var Width = document.querySelector("body > main").offsetWidth;

// const starterData = { 
//   size: {
//     width: 1020,
//     height: 600
//   }
// }

// window.onresize = scaleModifier();

// function scaleModifier() {
// /*   if (window.innerWidth < 1020) || (event.matches) { */
//     let scale = Width/starterData.size.width;
//     slider.style.transform ="translate(0%, 0%) " + "scale(" + scale + ")";
//     slider.style.height = starterData.size.width*scale;
//     console.log(slider.style.transform)  
// /*   } */
// } 

// window.matchMedia('(max-width: 1020px)').addListener(scaleModifier);

/* ====== Portfolio menu part ==== */

const portfolioMenu = document.querySelector("body > main > section#portfolio > ul.portfolio_menu");
let imagesMenu = document.querySelector('ul.portfolio_images');
let imagesArray = Array.from(document.querySelectorAll("#portfolio > ul.portfolio_images > li"));

function shuffle(array) {
  let m = array.length, i;
  // While there remain elements to shuffle…
  while (m) {
    // Pick a remaining element…
    i = Math.floor(Math.random() * m--);
    // And swap it with the current element.
    [array[m], array[i]] = [array[i], array[m]];
  }
  return array;
}


portfolioMenu.onclick = event => {
  if (event.target.id == 'all') {
    imagesMenu.innerHTML = '';
    shuffle(imagesArray).forEach(li => {
      imagesMenu.appendChild(li);
    }) 
  }
  portfolioMenu.querySelectorAll('li > button').forEach(element => element.classList.remove('portfolio-active'));
  event.target.classList.add('portfolio-active');
  imagesMenu.dataset.filter = event.target.id;
}

// let imagesArray = document.querySelectorAll('ul.portfolio_images > li');

imagesMenu.onclick = (e) => {
  if (e.target.classList.contains('portfolio_images')) return;
  else if (e.target.parentNode.classList.contains('portfolio_images_clicked')) { 
    e.target.parentNode.classList.remove('portfolio_images_clicked');
  }
  else {
    imagesMenu.querySelectorAll('li').forEach(element => element.classList.remove('portfolio_images_clicked'));
    e.target.parentNode.classList.add('portfolio_images_clicked');
  }
}

/* ====== Contact menu part ==== */

/* == Modal == */

const form = document.forms[0];
const modalWindowElements = document.querySelector("body > div > div.modal-window").querySelectorAll('p');
const modalBackground = document.querySelector("body > div.modal-background");
const SubmitFields = form.querySelectorAll('[name=Subject],[name=Detail]');

form.onsubmit = (event) => {
  if (!form.checkValidity()) return
  event.preventDefault();
  if (SubmitFields[0].value) modalWindowElements[0].innerText = `Тема: ${SubmitFields[0].value}`;
  if (SubmitFields[1].value) modalWindowElements[1].innerText = `Описание: ${SubmitFields[1].value}`;
  modalBackground.dataset.modalswitch='on';
}

modalBackground.onclick = (event) => {
  if ((event.target.classList.contains('modal-background')) || (event.target.classList.contains('exit-button')) || (event.target.tagName == 'BUTTON')) {
    modalBackground.dataset.modalswitch='off';
    for (field=0; field<4; field++) form.elements[field].value = ''
    modalWindowElements[0].innerText = 'Без темы';
    modalWindowElements[1].innerText = 'Без описания';
  };
}
