const headerMenu = document.querySelector("body > header > ul");
const portfolioMenu = document.querySelector("body > main > section.portfolio > ul.portfolio_menu");

headerMenu.onclick = event => { headerMenu.querySelectorAll('li > a').forEach(element => element.classList.remove('menu-active'));
    event.target.classList.add('menu-active');
};

// menu.addEventListener('click', (event) => { menu.querySelectorAll('li > a').forEach(element => element.removeAttribute('id', 'menu-active'));
//     event.target.setAttribute('id','menu-active');
// });

// nav.onclick = e => e.preventDefault() || e.target.tagName!='A'? 0 :
//             document.querySelector(e.target.getAttribute('href'))
//               .scrollIntoView({behavior: 'smooth'});

// всем картинках присваеваем классы в соответствии с названиями пунктов меню - руками в HTML

//кликаем на опцию меню: 
portfolioMenu.onclick = event => {

    portfolioMenu.querySelectorAll('li > button').forEach(element => element.classList.remove('portfolio-active'));
    event.target.classList.add('portfolio-active');

    document.querySelector('ul.portfolio_images').dataset.filter = event.target.id;

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
