/* ======= Header menu part ===== */

document.addEventListener('scroll', onscroll);

function onscroll (e) {
  const scrollPosition = window.scrollY;
  const allParts = document.querySelectorAll('body > header, body > main > section, body > footer');
  console.log(scrollPosition);

  allParts.forEach((element) => {
    console.log(element.getAttribute('id'));
  });
}

const headerMenu = document.querySelector("body > header > ul");

headerMenu.onclick = event => { headerMenu.querySelectorAll('li > a').forEach(element => element.classList.remove('menu-active'));
    event.target.classList.add('menu-active');
};

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
    new_slide.dataset.show = 'current'
    new_slide.ontransitionend = function () {
      slide_container.classList.remove('busy')
    }
  }, 50)
}
 

/* ====== Portfolio menu part ==== */

const portfolioMenu = document.querySelector("body > main > section.portfolio > ul.portfolio_menu");
const imagesMenu = document.querySelector('ul.portfolio_images');

portfolioMenu.onclick = event => {

    portfolioMenu.querySelectorAll('li > button').forEach(element => element.classList.remove('portfolio-active'));
    event.target.classList.add('portfolio-active');

    imagesMenu.dataset.filter = event.target.id;

    /* 
    //узнаем пункт меню на который произошел клик: event.target и соответственно event.target.id
    const images = document.querySelector('ul.portfolio_images');

    //находим картинки с таким классом: let foundImages = images.filter(proper => proper.toLowerCase().includes(event.target.id.toLowerCase())) или же document.querySelectorAll(`.${event.target.id}`) 
    let foundImages = images.querySelectorAll(`li[data-type="${event.target.id}"]`);
    // foundImages = document.querySelectorAll('li').dataset.type

    // задаем им дисплей - ноун, остальным дисплей блок foundImages.style.display = 'none';
    if (event.target.id == 'all') [...images.children].forEach(element => element.style.display = 'list-item')
    else {
        [...images.children].forEach(element => element.style.display = 'none');
        foundImages.forEach(element => element.style.display = 'list-item');
    } 
    */
}

imagesMenu.onclick = (e) => {
  if (e.target.classList.contains('portfolio_images')) return;
  imagesMenu.querySelectorAll('li').forEach(element => element.classList.remove('portfolio_images_clicked'));
  e.target.parentNode.classList.add('portfolio_images_clicked');

}